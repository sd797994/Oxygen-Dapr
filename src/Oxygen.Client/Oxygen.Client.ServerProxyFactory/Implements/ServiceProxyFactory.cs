using Oxygen.Client.ServerProxyFactory.Interface;
using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Common.Implements;
using Oxygen.ProxyGenerator.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerProxyFactory.Implements
{
    public class ServiceProxyFactory : IServiceProxyFactory
    {
        private readonly IRemoteMessageSender messageSender;
        public ServiceProxyFactory(IRemoteMessageSender messageSender)
        {
            this.messageSender = messageSender;
        }
        public T CreateProxy<T>() where T : class
        {
            return OxygenIocContainer.Resolve<T>();
        }
        public async Task<DefaultEventPublishResponse> SendEvent<T>(T input) where T : IEvent
        {
            return await messageSender.SendMessage<DefaultEventPublishResponse>("pubsub", input.Topic, input);
        }
    }
}
