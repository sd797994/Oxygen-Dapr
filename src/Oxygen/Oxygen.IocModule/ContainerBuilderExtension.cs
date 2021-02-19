using Autofac;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Extensions.DependencyInjection;
using Oxygen.Common;
using Oxygen.Mesh.Dapr;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.IocModule
{
    public static class ContainerBuilderExtension
    {
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
            builder.RegisterModule(new Client.ServerProxyFactory.Module());
            return builder;
        }
    }
}
