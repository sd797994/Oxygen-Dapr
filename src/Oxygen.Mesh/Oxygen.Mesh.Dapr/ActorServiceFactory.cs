using Autofac;
using Dapr.Actors.AspNetCore;
using Dapr.Actors.Runtime;
using Microsoft.AspNetCore.Hosting;
using Oxygen.Client.ServerSymbol;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Oxygen.Mesh.Dapr
{
    public class ActorServiceFactory
    {
        public static void RegisterActorService(object app, ILifetimeScope lifetimeScope)
        {
            ((IWebHostBuilder)app).UseActors(actorRuntime => CreateDelegate(actorRuntime, lifetimeScope));
        }
        internal static void CreateDelegate(ActorRuntime actorRuntime, ILifetimeScope lifetimeScope)
        {
            OxygenIocContainer.BuilderIocContainer(lifetimeScope);
            //获取所有标记为remote的servie
            var remoteservice = ReflectionHelper.GetTypesByAttributes(true, typeof(RemoteServiceAttribute));
            //获取所有标记为remote的method构造具体的delegate
            remoteservice.ToList().ForEach(x =>
            {
                if (ReflectionHelper.GetTypeByInterface(x) != null)
                {
                    var implType = ReflectionHelper.GetTypeByInterface(x);
                    if (implType != null)
                    {
                        var methods = new List<MethodInfo>();
                        ReflectionHelper.GetMethodByFilter(x, typeof(RemoteFuncAttribute)).ToList().ForEach(y =>
                        {
                            var funcAttr = ReflectionHelper.GetAttributeProperyiesByMethodInfo<RemoteFuncAttribute>(y);
                            //生成服务调用代理
                            if (funcAttr.FuncType == FuncType.Actor)
                            {
                                methods.Add(y);
                            }
                        });
                        if (methods.Any())
                        {
                            try
                            {
                                var typeBuilder = ActorProxyBuilder.GetType(x, implType, methods.ToArray());
                                Func<ActorTypeInformation, ActorService> createFunc = (info) => new ActorService(info, (actorService, actorId) =>
                                {
                                    OxygenIocContainer.BuilderIocContainer(lifetimeScope);
                                    var obj = Activator.CreateInstance(typeBuilder.proxyType, new object[] { actorService, actorId, lifetimeScope }) as Actor;
                                    ActorStateSubscriber.RegisterHandler(implType.BaseType.GetProperty("ActorData").PropertyType.FullName, typeBuilder.SaveDataFunc);
                                    return obj;
                                });
                                typeof(ActorRuntime).GetMethod("RegisterActor").MakeGenericMethod(typeBuilder.proxyType).Invoke(actorRuntime, new object[] { createFunc });
                            }
                            catch (Exception e)
                            {
                                lifetimeScope.Resolve<ILogger>().LogError($"Actor代理创建失败，原因：{e.GetBaseException().Message}");
                            }
                        }
                    }
                }
            });
        }
    }
}