using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Common.Implements;
using Oxygen.IocModule;
using Oxygen.ProxyGenerator.Implements;
using RemoteInterface;
using System;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace Server
{
    class Program
    {
        static async Task Main(string[] args)
        {
            await CreateDefaultHost(args).Build().RunAsync();
        }
        static IHostBuilder CreateDefaultHost(string[] args) => new HostBuilder()
            .ConfigureContainer<ContainerBuilder>(builder =>
            {
                //注入oxygen依赖
                builder.RegisterOxygenModule();
                //注入测试demo
                builder.RegisterType<HelloServiceImpl>().As<IHelloService>().InstancePerLifetimeScope();
                builder.RegisterType<HelloEventHandler>().As<HelloEventHandler>().InstancePerLifetimeScope();
                builder.RegisterType<HelloRepository>().As<IHelloRepository>().InstancePerLifetimeScope();
            })
            .ConfigureLogging((hostingContext, logging) => {
                logging.AddConsole();
            })
            .ConfigureServices((context, services) =>
            {
                //注册成为oxygen服务节点
                services.StartOxygenServer((config) => { 
                    config.Port = 80; 
                    config.PubSubCompentName = "pubsub";
                    config.StateStoreCompentName = "statestore";
                    config.TracingHeaders = "Authentication";
                });
                //注册全局拦截器
                LocalMethodAopProvider.RegisterPipelineHandler((methodctx) => {
                    HttpContextCurrent.SetCurrent(methodctx);
                },async (obj, methodctx) =>
                {
                    if (obj != null)
                        Console.WriteLine($"这里是方法前拦截器，拦截到参数：{JsonSerializer.Serialize(obj)}");
                    await Task.CompletedTask;
                    var s = HttpContextCurrent.GetCurrent();

                }, async (result) =>
                {
                    Console.WriteLine($"这里是方法后拦截器，拦截到方法结果：{JsonSerializer.Serialize(result)}");
                    var s = HttpContextCurrent.GetCurrent();
                    await Task.CompletedTask;
                }, async (exp) =>
                {
                    Console.WriteLine($"这里是方法异常拦截器，拦截到异常：{exp.Message}");
                    return await Task.FromResult(new { Message = exp.Message });
                });
                services.AddAutofac();
            })
            .UseServiceProviderFactory(new AutofacServiceProviderFactory());
    }
    public static class HttpContextCurrent
    {
        private static AsyncLocal<OxygenHttpContextWapper> currentcontext = new AsyncLocal<OxygenHttpContextWapper>();
        internal static void SetCurrent(OxygenHttpContextWapper httpContextWapper)
        {
            if (currentcontext.Value == null)
                currentcontext.Value = httpContextWapper;
        }
        internal static OxygenHttpContextWapper GetCurrent()
        {
            return currentcontext.Value;
        }
    }
}
