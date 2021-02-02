using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Common.Interface
{
    public interface IInProcessEventBus
    {
        Task SendEvent<T>(string topic, T input);
    }
}
