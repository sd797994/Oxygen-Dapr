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
        public static new void ConfigureServices(IServiceCollection service)
        {
            OxygenStartup.ConfigureServices(service);
            ActorServiceFactory.RegisterActorService(service);
        }
        public static new void Configure(IApplicationBuilder appBuilder, IServiceProvider serviceProvider)
        {
            OxygenStartup.Configure(appBuilder, serviceProvider);
            ActorServiceFactory.UseActorService(appBuilder, serviceProvider.GetService<ILifetimeScope>());
        }
    }
}
