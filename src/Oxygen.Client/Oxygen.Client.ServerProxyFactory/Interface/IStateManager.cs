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
        Task<DefaultResponse> SetState<T>(StateStore<T> input) where T : class, new();
        Task<DefaultResponse> DelState<T>(StateStore<T> input) where T : class, new();
        Task<T> GetState<T>(StateStore<T> input) where T : class, new();
    }
}
