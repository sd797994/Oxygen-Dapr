using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Client.ServerSymbol
{
    /// <summary>
    /// 远程服务接口标记
    /// </summary>
    [AttributeUsage(AttributeTargets.Interface)]
    public class RemoteServiceAttribute : Attribute
    {
        public RemoteServiceAttribute(string hostName, string servicename = "", string serverDescription = "")
        {
            HostName = hostName;
            ServerName = servicename;
            ServerDescription = serverDescription;
        }
        public string HostName { get; set; }
        public string ServerName { get; set; }
        public string ServerDescription { get; set; }
    }
}
