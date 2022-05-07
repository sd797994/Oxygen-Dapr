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
        static ILifetimeScope _lifetimeScope = null;
        static MethodInfo daprRegisterMethodInfo = typeof(ActorRegistrationCollection).GetMethod("RegisterActor", new Type[] { typeof(Action<ActorRegistration>) });
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
            foreach (var item in ReflectionHelper.GetTypesByNameSpace("Oxygen.Mesh.Dapr.ProxyImpl"))
            {
                daprRegisterMethodInfo.MakeGenericMethod(item).Invoke(actorRegistrations, new object[] { default(Action<ActorRegistration>) });
                dynamic func = item.GetField("ActorServiceSaveData").GetValue(null);
                _lifetimeScope.Resolve<ISubscribeInProcessFactory>().RegisterEventHandler(item.BaseType.GetProperty("ActorData").PropertyType.FullName, _lifetimeScope, func);
            }
        }
    }
}