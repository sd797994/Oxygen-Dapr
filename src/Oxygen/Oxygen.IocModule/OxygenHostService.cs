using Autofac;
using Microsoft.Extensions.Hosting;
using Oxygen.Common.Implements;
using Oxygen.ProxyGenerator.Implements;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Oxygen.IocModule
{
    public class OxygenHostService : IHostedService
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
            await server.OpenServer(null, HostBuilderExtension.Port);
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {
            await server.CloseServer();
        }
    }
}
