using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Client.ServerSymbol.Events
{
    /// <summary>
    /// 事件消息基类
    /// </summary>
    public abstract class IEvent
    {
        public abstract string PubSubName { get; }
        public abstract string Topic { get; }
    }
}
