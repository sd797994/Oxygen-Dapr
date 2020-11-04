using Autofac;
using Microsoft.Extensions.Hosting;
using Oxygen.Common.Implements;
using Oxygen.Mesh.Dapr;
using Oxygen.ProxyGenerator.Implements;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Oxygen.IocModule
{
    internal class OxygenHostService : IHostedService
    {
        private readonly IServer.IServer server;
        public OxygenHostService(IServer.IServer server, ILifetimeScope lifetimeScope)
        {
            this.server = server;
            OxygenIocContainer.BuilderIocContainer(lifetimeScope);
            RemoteProxyGenerator.InitRemoteMessageSenderDelegate();//初始化消息发送代理
        }
        public async Task StartAsync(CancellationToken cancellationToken)
        {
            await server.OpenServer((x) => ActorServiceFactory.RegisterActorService(x), HostBuilderExtension.Port);
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {
            await server.CloseServer();
        }
    }
}
