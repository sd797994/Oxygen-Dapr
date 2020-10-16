using Oxygen.Client.ServerProxyFactory.Interface;
using Oxygen.Common.Implements;
using System;
using System.Collections.Generic;
using System.Text;

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
