using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Client.ServerSymbol
{
    /// <summary>
    /// 远程方法标记物
    /// </summary>
    [AttributeUsage(AttributeTargets.Method)]
    public class RemoteFuncAttribute : Attribute
    {
        public FuncType funcType { get; set; }
        public RemoteFuncAttribute(FuncType funcType = FuncType.Normal)
        {
            this.funcType = funcType;
        }
    }
}
