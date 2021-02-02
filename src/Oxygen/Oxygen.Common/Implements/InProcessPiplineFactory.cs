using Autofac;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Common.Implements
{
    public static class InProcessPiplineFactory
    {
        static ConcurrentDictionary<string, InProcessPiplineBase> PiplineList = new ConcurrentDictionary<string, InProcessPiplineBase>();
        public static bool Add<T>(string topic, ILifetimeScope lifetimeScope, Func<T, ILifetimeScope, Task> eventHandler)
        {
            return PiplineList.TryAdd(topic, new InProcessPipline<T>(lifetimeScope, eventHandler));
        }
        public static InProcessPipline<T> Get<T>(string topic)
        {
            if(PiplineList.TryGetValue(topic,out InProcessPiplineBase inProcess))
            {
                return inProcess as InProcessPipline<T>;
            }
            return default;
        }
    }
}
