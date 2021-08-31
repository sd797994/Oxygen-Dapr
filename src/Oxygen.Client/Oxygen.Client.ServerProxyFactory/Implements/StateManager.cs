using Oxygen.Client.ServerProxyFactory.Interface;
using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Client.ServerSymbol.Store;
using Oxygen.Common;
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
        public async Task<DefaultResponse> DelState(StateStore input)
        {
            return await messageSender.SendMessage<DefaultResponse>(DaprConfig.GetCurrent().StateStoreCompentName, $"/{input.Key}", null, SendType.delState);
        }
        public async Task<T> GetState<T>(StateStore input) where T : new()
        {
            return await messageSender.SendMessage<T>(DaprConfig.GetCurrent().StateStoreCompentName, $"/{input.Key}", null, SendType.getState);
        }
        public async Task<DefaultResponse> SetState(StateStore input)
        {
            return await messageSender.SendMessage<DefaultResponse>(DaprConfig.GetCurrent().StateStoreCompentName, "", new[] { new { key = input.Key, value = input.Data, metadata = new { ttlInSeconds = input.ttlInSeconds == null || input.ttlInSeconds <= 0 ? "-1" : $"{input.ttlInSeconds}" } } }, SendType.setState);
        }
    }
}
