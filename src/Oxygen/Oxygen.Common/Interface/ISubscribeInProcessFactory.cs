using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Common.Interface
{
    public interface ISubscribeInProcessFactory
    {
        bool RegisterEventHandler<T>(string topic, ILifetimeScope lifetimeScope, Func<T, ILifetimeScope, Task> eventHandler);
    }
}
