using Microsoft.Extensions.Logging;
using Oxygen.Client.ServerSymbol;
using Oxygen.Client.ServerSymbol.Events;
using RemoteInterface;
using Server.interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Server
{
    public class HelloEventHandler : IHelloEventHandler
    {
        private readonly ILogger<HelloEventHandler> logger;
        public HelloEventHandler(ILogger<HelloEventHandler> logger)
        {
            this.logger = logger;
        }
        public async Task<DefaultEventHandlerResponse> SubscribeByUserInfoEvent(TestEventDto input)
        {
            logger.LogInformation($"订阅器收到消息：{JsonSerializer.Serialize(input)}");
            return await Task.FromResult(new DefaultEventHandlerResponse());
        }
    }
}
