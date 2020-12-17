using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Client.ServerSymbol.Store;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerProxyFactory.Interface
{
    public interface IStateManager
    {
        Task<DefaultResponse> SetState(StateStore input);
        Task<DefaultResponse> DelState(StateStore input);
        Task<T> GetState<T>(StateStore input) where T : new();
    }
}
