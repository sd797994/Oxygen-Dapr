using Oxygen.Client.ServerSymbol.Events;
using RemoteInterface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Server.interfaces
{
    internal interface IHelloEventHandler : IEventHandler
    {
        Task<DefaultEventHandlerResponse> SubscribeByUserInfoEvent(TestEventDto input);
    }
}
