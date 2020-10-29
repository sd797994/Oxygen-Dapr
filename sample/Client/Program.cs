using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Oxygen.IocModule;
using RemoteInterface;
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
            .ConfigureContainer<ContainerBuilder>(builder =>
            {
                //注入oxygen依赖
                builder.RegisterOxygenModule();
                //注入测试demo
                builder.RegisterType<CallServiceImpl>().As<ICallService>().InstancePerLifetimeScope();
            })
            .ConfigureLogging((hostingContext, logging) => {
                //logging.AddConsole();
            })
            .ConfigureServices((context, services) =>
            {
                //注册成为oxygen服务节点
                services.StartOxygenServer();
                services.AddAutofac();
            })
            .UseServiceProviderFactory(new AutofacServiceProviderFactory());
    }
}
