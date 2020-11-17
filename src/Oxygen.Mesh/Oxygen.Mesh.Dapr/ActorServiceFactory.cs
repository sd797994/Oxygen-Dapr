using Autofac;
using Dapr.Actors;
using Dapr.Actors.AspNetCore;
using Dapr.Actors.Runtime;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Oxygen.Client.ServerSymbol;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

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
            //获取所有标记为remote的servie
            var remoteservice = ReflectionHelper.GetTypesByAttributes(true, typeof(RemoteServiceAttribute));
            //获取所有标记为remote的method构造具体的delegate
            remoteservice.ToList().ForEach(x =>
            {
                var target = OxygenIocContainer.Resolve(x);
                if ((target is DispatchProxy) == false)
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
                                    var instance = lifetimeScope.Resolve(x);
                                    var obj = Activator.CreateInstance(typeBuilder.proxyType, new object[] { actorService, actorId, lifetimeScope, instance }) as Actor;
                                    ActorStateSubscriber.RegisterHandler(implType.BaseType.GetProperty("ActorData").PropertyType.FullName, (Func<Task>)implType.GetMethod("SaveData").CreateDelegate(typeof(Func<Task>), instance));
                                    return obj;
                                });
                                typeof(ActorRuntime).GetMethod("RegisterActor").MakeGenericMethod(typeBuilder.proxyType).Invoke(actorRuntime, new object[] { createFunc });
                                //test code:
                                //Activator.CreateInstance(typeBuilder.proxyType, new object[] { new ActorService(new ActorTypeInformation()), new ActorId("1"), lifetimeScope, lifetimeScope.Resolve(x) });
                            }
                            catch (Exception e)
                            {
                                lifetimeScope.Resolve<ILogger>().LogError($"Actor代理创建失败，原因：{e.Message}");
                            }
                        }
                    }
                }
            });
        }

    }
}