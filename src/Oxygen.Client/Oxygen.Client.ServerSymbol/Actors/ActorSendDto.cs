using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Client.ServerSymbol.Actors
{
    /// <summary>
    /// 所有Actor服务入参必须继承此类型
    /// </summary>
    public abstract class ActorSendDto
    {
        public abstract string ActorId { get; set; }
    }
}
