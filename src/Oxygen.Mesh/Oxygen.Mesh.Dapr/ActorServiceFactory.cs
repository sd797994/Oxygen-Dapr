using Autofac;
using Dapr.Actors;
using Dapr.Actors.Runtime;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Oxygen.Client.ServerSymbol;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using Oxygen.Mesh.Dapr.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Oxygen.Mesh.Dapr
{
    public class ActorServiceFactory
    {
        static ILifetimeScope _lifetimeScope;
        public static void UseActorService(IApplicationBuilder appBuilder, ILifetimeScope lifetimeScope)
        {
            if (lifetimeScope != null)
                _lifetimeScope = _lifetimeScope ?? lifetimeScope;
            appBuilder.UseRouting().UseEndpoints(endpoints => endpoints.MapActorsHandlers());
        }
        public static void RegisterActorService(IServiceCollection services)
        {
            services.AddActors(options => CreateDelegate(options.Actors));
        }
        internal static void CreateDelegate(ActorRegistrationCollection actorRegistrations)
        {
            OxygenIocContainer.BuilderIocContainer(_lifetimeScope);
            //获取所有标记为remote的servie
            var remoteservice = ReflectionHelper.GetTypesByAttributes(true, typeof(RemoteServiceAttribute));
            //获取所有标记为remote的method构造具体的delegate
            remoteservice.ToList().ForEach(x =>
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
                            typeof(ActorRegistrationCollection).GetMethod("RegisterActor").MakeGenericMethod(typeBuilder.proxyType).Invoke(actorRegistrations, new object[] { default(Action<ActorRegistration>) });
                            _lifetimeScope.Resolve<ISubscribeInProcessFactory>().RegisterEventHandler(implType.BaseType.GetProperty("ActorData").PropertyType.FullName, _lifetimeScope, typeBuilder.SaveDataFunc);
                        }
                        catch (Exception e)
                        {
                            _lifetimeScope.Resolve<ILogger>().LogError($"Actor代理创建失败，原因：{e.GetBaseException().Message}");
                        }
                    }
                }
            });
        }
    }
}