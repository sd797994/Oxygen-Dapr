using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    public static class EventHandleRequestExtension
    {
        static Lazy<ISerialize> serialize = new Lazy<ISerialize>(() =>
        {
            return OxygenIocContainer.Resolve<ISerialize>();
        });
        public static T GetData<T>(this EventHandleRequest<T> handleRequest) where T : class
        {
            if (handleRequest == null || string.IsNullOrEmpty(handleRequest.data))
                return default;
            else
            {
                return serialize.Value.DeserializesJson<T>(handleRequest.data);
            }
        }
    }
}
