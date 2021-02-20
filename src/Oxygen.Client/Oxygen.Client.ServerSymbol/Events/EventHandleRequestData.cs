using Oxygen.Client.ServerSymbol.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerSymbol.Events
{
    /// <summary>
    /// 订阅者入参预处理容器
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class TempDataByEventHandleInput<T>: EventHandleRequest<T> where T : class
    {
        public string data { get; set; }
        public T value { get; set; }
    }
}
