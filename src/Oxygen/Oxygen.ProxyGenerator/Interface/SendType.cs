using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.ProxyGenerator.Interface
{
    public enum SendType
    {
        invoke = 0,
        publish = 1,
        actors = 2,
        setState = 3,
        getState = 4,
        delState = 5
    }
}
