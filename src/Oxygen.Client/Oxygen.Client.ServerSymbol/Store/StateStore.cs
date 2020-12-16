using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerSymbol.Store
{
    public abstract class StateStore
    {
        public abstract string Key { get; set; }
        public abstract object Data { get; set; }
    }
}
