using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerSymbol.Store
{
    public abstract class StateStore<T>
    {
        public abstract string StoreName { get; }
        public string Key { get; set; }
        public T Data { get; set; }
    }
}
