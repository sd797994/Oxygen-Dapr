using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Client.ServerSymbol
{
    public enum FuncType
    {
        /// <summary>
        /// 普通web服务
        /// </summary>
        Normal = 0,
        /// <summary>
        /// actor服务
        /// </summary>
        Actor = 1,
        /// <summary>
        /// 事件消费服务
        /// </summary>
        EventHandle = 2
    }
}
