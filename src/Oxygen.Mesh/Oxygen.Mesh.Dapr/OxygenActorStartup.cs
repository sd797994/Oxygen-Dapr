using Autofac;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Oxygen.Common.Interface;
using Oxygen.Server.Kestrel.Implements;
using Oxygen.Server.Kestrel.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Mesh.Dapr
{
    public class OxygenActorStartup : OxygenStartup
    {
        public override void ConfigureServices(IServiceCollection service)
        {
            base.ConfigureServices(service);
            ActorServiceFactory.RegisterActorService(service);
        }
        public override void Configure(IApplicationBuilder appBuilder, ILifetimeScope lifetimeScope, IServerHandler serverHandler, ISerialize serialize)
        {
            base.Configure(appBuilder, lifetimeScope, serverHandler, serialize);
            ActorServiceFactory.UseActorService(appBuilder, lifetimeScope);
        }
    }
}
