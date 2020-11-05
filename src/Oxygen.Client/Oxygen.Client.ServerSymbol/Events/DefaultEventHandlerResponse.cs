using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Client.ServerSymbol.Events
{
    /// <summary>
    /// 默认的事件处理回调类
    /// </summary>
    public class DefaultEventHandlerResponse
    {
        public string status { get => "SUCCESS"; set => status = value; }
    }
    /// <summary>
    /// 默认的发布事件回调类
    /// </summary>
    public class DefaultEventPublishResponse
    {

    }
}
