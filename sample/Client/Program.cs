using Autofac;
using Autofac.Extensions.DependencyInjection;
using ClienActorSample;
using Client;
using Microsoft.Extensions.Hosting;
using Oxygen.IocModule;
using Oxygen.Mesh.Dapr;
using Oxygen.Server.Kestrel.Implements;
using RemoteInterface;

var builder = OxygenApplication.CreateBuilder(config =>
{
    config.Port = 80;
    config.PubSubCompentName = "pubsub";
    config.StateStoreCompentName = "statestore";
    config.TracingHeaders = "Authentication";
    config.UseCors = true;
});
OxygenActorStartup.ConfigureServices(builder.Services);
builder.Host.ConfigureContainer<ContainerBuilder>(builder =>
{
    //注入oxygen依赖
    builder.RegisterOxygenModule();
    //注入测试demo
    builder.RegisterType<CallServiceImpl>().As<ICallService>().InstancePerLifetimeScope();
    builder.RegisterType<HelloActorService>().As<IHelloActorService>().InstancePerLifetimeScope();
    builder.RegisterType<HelloRepository>().As<IHelloRepository>().InstancePerLifetimeScope();
});
builder.Services.AddAutofac();
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
var app = builder.Build();
OxygenActorStartup.Configure(app, app.Services);
await app.RunAsync();