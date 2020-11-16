using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.ProxyGenerator.Interface
{
    public interface IRemoteMessageSender
    {
        Task<T> SendMessage<T>(string hostName, string serverName, object input, SendType sendType) where T : class, new();
    }
}
