using Autofac;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.IocModule
{
    public static class HostBuilderExtension
    {
        public static int Port { get; set; }
        /// <summary>
        /// 依赖注入IOC模块
        /// </summary>
        /// <param name="builder"></param>
        /// <returns></returns>
        public static ContainerBuilder RegisterOxygenModule(this ContainerBuilder builder)
        {
            //注入通用服务
            builder.RegisterModule(new Common.Module());
            builder.RegisterModule(new Server.Kestrel.Module());
            builder.RegisterModule(new ProxyGenerator.Module());
            builder.RegisterModule(new Mesh.Dapr.Module());
            builder.RegisterModule(new Client.ServerProxyFactory.Module());
            return builder;
        }
        /// <summary>
        /// 注入web服务
        /// </summary>
        /// <param name="collection"></param>
        public static void StartOxygenServer(this IServiceCollection collection, int port = 80)
        {
            Port = port;
            collection.AddHttpClient();
            collection.AddHostedService<OxygenHostService>();
        }
    }
}
