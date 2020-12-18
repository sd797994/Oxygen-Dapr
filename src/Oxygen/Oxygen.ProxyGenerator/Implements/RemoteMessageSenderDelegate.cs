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
        private Func<string, string, Tin, SendType, Tout> proxyfunc;
        public RemoteMessageSenderDelegate(MethodInfo method, object instence)
        {
            proxyfunc = (Func<string, string, Tin, SendType, Tout>)method.CreateDelegate(typeof(Func<string, string, Tin, SendType, Tout>), instence);
        }
        public object Excute(string hostName, string serviceName, object val, SendType sendType)
        {
            if (val != null)
                return proxyfunc(hostName, serviceName, (Tin)val, sendType);
            else
                return proxyfunc(hostName, serviceName, default, sendType);
        }
    }
}
