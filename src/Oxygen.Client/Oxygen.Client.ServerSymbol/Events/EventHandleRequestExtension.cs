using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerSymbol.Events
{
    public static class EventHandleRequestExtension
    {
        static Lazy<ISerialize> serialize = new Lazy<ISerialize>(() =>
        {
            return OxygenIocContainer.Resolve<ISerialize>();
        });
        public static T GetData<T>(this EventHandleRequest<T> handleRequest) where T : class
        {
            if (handleRequest == null)
                return default;
            var request = handleRequest as TempDataByEventHandleInput<T>;
            if (request.value != null)
            {
                return request.value;
            }
            else if (!string.IsNullOrEmpty(request.data))
            {
                request.value = serialize.Value.DeserializesJson<T>(request.data);
                return request.value;
            }
            return default;
        }
    }
}
