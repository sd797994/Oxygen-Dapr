using Oxygen.ProxyGenerator.Interface;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.ProxyGenerator.Implements
{
    internal class RemoteMessageSenderDelegate<Tin, Tout> : IRemoteMessageSenderDelegate where Tout : Task
    {
        private Func<string, string, Tin, Tout> proxyfunc;
        public RemoteMessageSenderDelegate(MethodInfo method, object instence)
        {
            proxyfunc = (Func<string, string, Tin, Tout>)method.CreateDelegate(typeof(Func<string, string, Tin, Tout>), instence);
        }
        public object Excute(string hostName, string serviceName, object val)
        {
            return proxyfunc(hostName, serviceName, (Tin)val);
        }
    }
}
