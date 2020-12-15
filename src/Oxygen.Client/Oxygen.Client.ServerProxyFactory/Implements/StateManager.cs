using Oxygen.Client.ServerProxyFactory.Interface;
using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Client.ServerSymbol.Store;
using Oxygen.ProxyGenerator.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerProxyFactory.Implements
{
    public class StateManager : IStateManager
    {
        private readonly IRemoteMessageSender messageSender;
        public StateManager(IRemoteMessageSender messageSender)
        {
            this.messageSender = messageSender;
        }

        public async Task<DefaultResponse> DelState<T>(StateStore<T> input) where T : class, new()
        {
            return await messageSender.SendMessage<DefaultResponse>(input.StoreName, $"/{input.Key}", null, SendType.delState);
        }

        public async Task<T> GetState<T>(StateStore<T> input) where T : class, new()
        {
            return await messageSender.SendMessage<T>(input.StoreName, $"/{input.Key}", null, SendType.getState);
        }

        public async Task<DefaultResponse> SetState<T>(StateStore<T> input) where T : class, new()
        {
            return await messageSender.SendMessage<DefaultResponse>(input.StoreName, "", new[] { new { key = input.Key, value = input.Data } }, SendType.setState);
        }
    }
}
