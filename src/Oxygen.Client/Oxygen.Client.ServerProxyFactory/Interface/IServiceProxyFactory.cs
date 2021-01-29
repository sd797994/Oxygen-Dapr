using Oxygen.Client.ServerSymbol.Events;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerProxyFactory.Interface
{
    public interface IServiceProxyFactory
    {
        T CreateProxy<T>() where T : class;
        T CreateActorProxy<T>() where T : class;
    }
}
