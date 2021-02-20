using Autofac;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Oxygen.Common;
using Oxygen.Common.Interface;
using Oxygen.Server.Kestrel.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    public class OxygenStartup
    {
        public virtual void ConfigureServices(IServiceCollection service)
        {
            service.AddHttpClient();
            service.AddHostedService<OxygenHostService>();
        }
        public virtual void Configure(IApplicationBuilder appBuilder, ILifetimeScope lifetimeScope, IServerHandler serverHandler, ISerialize serialize)
        {
            if (DaprConfig.GetCurrent().UseStaticFiles)
                appBuilder.UseStaticFiles();
            serverHandler.BuildHandler(appBuilder, serialize);
        }
    }
}
