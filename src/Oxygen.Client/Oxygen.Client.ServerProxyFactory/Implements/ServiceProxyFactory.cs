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
        public T CreateProxy<T>() where T : class
        {
            return OxygenIocContainer.Resolve<T>();
        }
    }
}
