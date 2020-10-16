using Oxygen.ProxyGenerator.Interface;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.ProxyGenerator.Implements
{
    public class RemoteMessageSenderDelegate<Tin, Tout> : IRemoteMessageSenderDelegate where Tout : Task
    {
        private Func<string,Tin, Tout> proxyfunc;
        public RemoteMessageSenderDelegate(MethodInfo method, object instence)
        {
            proxyfunc = (Func<string, Tin, Tout>)method.CreateDelegate(typeof(Func<string, Tin, Tout>), instence);
        }
        public object Excute(string serviceName, object val)
        {
            return proxyfunc(serviceName, (Tin)val);
        }
    }
}
