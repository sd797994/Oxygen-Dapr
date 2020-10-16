using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Client.ServerProxyFactory.Interface
{
    public interface IServiceProxyFactory
    {
        T CreateProxy<T>() where T : class;
    }
}
