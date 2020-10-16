using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.ProxyGenerator.Interface
{
    public interface IRemoteMessageSenderDelegate
    {
        object Excute(string serviceName, object val);
    }
}
