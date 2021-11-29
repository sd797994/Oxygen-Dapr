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
        public static void ConfigureServices(IServiceCollection service)
        {
            service.AddCors();
            service.AddHostedService<OxygenHostService>();
        }
        public static void Configure(IApplicationBuilder appBuilder, IServiceProvider serviceProvider)
        {
            if (DaprConfig.GetCurrent().UseStaticFiles)
                appBuilder.UseStaticFiles();
            if (DaprConfig.GetCurrent().UseCors)
            {
                appBuilder.UseCors(x => x.SetIsOriginAllowed(_ => true).AllowAnyHeader().AllowAnyMethod().AllowCredentials());
            }
            serviceProvider.GetService<IServerHandler>().BuildHandler(appBuilder, serviceProvider.GetService<ISerialize>());
        }
    }
}
