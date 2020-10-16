using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Internal;
using Oxygen.Common.Interface;
using Oxygen.Server.Kestrel.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    public class KestrelServerHandler : IServerHandler
    {
        private readonly ILogger logger;
        private readonly IMessageHandler messageHandler;
        public KestrelServerHandler(ILogger logger, IMessageHandler messageHandler)
        {
            this.logger = logger;
            this.messageHandler = messageHandler;
        }
        public void BuildHandler(IApplicationBuilder app)
        {
            RequestDelegateFactory.CreateDelegate(logger, messageHandler).ForEach(x => app.Map(x.Path, handle => handle.MapWhen(p => p.Request.Method.Equals("POST"), builder => builder.Run(x.Excute))));
        }
    }
}
