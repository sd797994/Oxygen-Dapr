using Oxygen.Client.ServerSymbol.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerProxyFactory.Interface
{
    public interface IEventBus
    {
        Task<DefaultResponse> SendEvent<T>(T input) where T : IEvent;
    }
}
