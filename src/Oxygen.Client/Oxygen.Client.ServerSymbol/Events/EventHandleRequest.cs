using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerSymbol.Events
{
    /// <summary>
    /// 所有dapr订阅者入参必须使用此类型，否则订阅入参无法正确反序列化
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class EventHandleRequest<T> where T : class
    {
        public T data { get; set; }
    }
}
