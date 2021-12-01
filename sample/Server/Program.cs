using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Oxygen.Common.Implements;
using Oxygen.IocModule;
using Oxygen.Mesh.Dapr;
using Oxygen.ProxyGenerator.Implements;
using Oxygen.Server.Kestrel.Implements;
using RemoteInterface;
using Server;
using System.Text.Json;

var builder = OxygenApplication.CreateBuilder(config =>
{
    config.Port = 80;
    config.PubSubCompentName = "pubsub";
    config.StateStoreCompentName = "statestore";
    config.TracingHeaders = "Authentication";
});
OxygenActorStartup.ConfigureServices(builder.Services);
builder.Host.ConfigureContainer<ContainerBuilder>(builder =>
{
    //注入oxygen依赖
    builder.RegisterOxygenModule();
    //注入测试demo
    builder.RegisterType<HelloServiceImpl>().As<IHelloService>().InstancePerLifetimeScope();
    builder.RegisterType<HelloEventHandler>().As<HelloEventHandler>().InstancePerLifetimeScope();
});
builder.Services.AddAutofac();
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
//注册全局拦截器
LocalMethodAopProvider.RegisterPipelineHandler((methodctx) => {
    HttpContextCurrent.SetCurrent(methodctx);
}, async (obj, methodctx) =>
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
var app = builder.Build();
OxygenActorStartup.Configure(app, app.Services);
await app.RunAsync();
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