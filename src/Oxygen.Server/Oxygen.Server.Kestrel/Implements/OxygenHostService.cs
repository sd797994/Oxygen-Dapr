using Autofac;
using Microsoft.Extensions.Hosting;
using Oxygen.Common.Implements;
using Oxygen.ProxyGenerator.Implements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    internal class OxygenHostService : IHostedService
    {
        public OxygenHostService(ILifetimeScope lifetimeScope)
        {
            OxygenIocContainer.BuilderIocContainer(lifetimeScope);
            RemoteProxyGenerator.InitRemoteMessageSenderDelegate();//初始化消息发送代理
        }
        public async Task StartAsync(CancellationToken cancellationToken)
        {
            await Task.CompletedTask;
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {
            await Task.CompletedTask;
        }
    }
}
