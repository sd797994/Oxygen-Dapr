using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Client.ServerSymbol.Events
{
    /// <summary>
    /// 事件订阅器标识，需要订阅器接口继承
    /// </summary>
    public interface IEventHandler
    {

    }
    public class EventHandleRequest<T> where T : IEvent
    {
        public T data { get; set; }
    }
}
