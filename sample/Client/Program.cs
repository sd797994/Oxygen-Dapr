using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Oxygen.IocModule;
using Oxygen.Mesh.Dapr;
using Oxygen.Server.Kestrel.Implements;
using RemoteInterface;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Client
{
    class Program
    {
        static async Task Main(string[] args)
        {
            await CreateDefaultHost(args).Build().RunAsync();
        }
        static IHostBuilder CreateDefaultHost(string[] args) => new HostBuilder()
            .ConfigureWebHostDefaults(webhostbuilder => {
                //注册成为oxygen服务节点
               webhostbuilder.StartOxygenServer<OxygenActorStartup>((config) => {
                    config.Port = 80;
                    config.PubSubCompentName = "pubsub";
                    config.StateStoreCompentName = "statestore";
                    config.TracingHeaders = "Authentication";
                });
            })
            .ConfigureContainer<ContainerBuilder>(builder =>
            {
                //注入oxygen依赖
                builder.RegisterOxygenModule();
                //注入测试demo
                builder.RegisterType<CallServiceImpl>().As<ICallService>().InstancePerLifetimeScope();
                builder.RegisterType<HelloActorService>().As<IHelloActorService>().InstancePerLifetimeScope();
                builder.RegisterType<HelloRepository>().As<IHelloRepository>().InstancePerLifetimeScope();
            })
            .ConfigureLogging((hostingContext, logging) => {
                logging.AddConsole();
            })
            .ConfigureServices((context, services) =>
            {
                services.AddAutofac();
            })
            .UseServiceProviderFactory(new AutofacServiceProviderFactory());
    }
}