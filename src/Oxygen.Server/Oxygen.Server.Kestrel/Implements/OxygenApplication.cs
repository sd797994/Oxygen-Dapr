using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Oxygen.Common;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    public static class OxygenApplication
    {
        /// <summary>
        /// 注入web服务
        /// </summary>
        /// <param name="webHostBuilder"></param>
        /// <param name="action"></param>
        public static WebApplicationBuilder CreateBuilder(Action<DaprConfig> action)
        {
            action(DaprConfig.GetCurrent());
            var option = new WebApplicationOptions()
            {
                ContentRootPath = Directory.GetCurrentDirectory(),
                WebRootPath = "wwwroot"
            };
            var webHostBuilder =DaprConfig.GetCurrent().UseStaticFiles ? WebApplication.CreateBuilder() : WebApplication.CreateBuilder(option);
            webHostBuilder.WebHost
                .UseKestrel(options => //重写ConfigureWebHostDefaults中Kestrel配置
                {
                    options.Listen(IPAddress.Any, DaprConfig.GetCurrent().Port, listenOptions =>
                    {
                        listenOptions.Protocols = HttpProtocols.Http1;
                    });
                });
            return webHostBuilder;
        }
    }
}
