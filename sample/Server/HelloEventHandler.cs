using Microsoft.Extensions.Logging;
using Oxygen.Client.ServerSymbol;
using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Server.Kestrel.Implements;
using RemoteInterface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Unicode;
using System.Threading.Tasks;

namespace Server
{
    public class HelloEventHandler : IEventHandler
    {
        private readonly ILogger<HelloEventHandler> logger;
        public HelloEventHandler(ILogger<HelloEventHandler> logger)
        {
            this.logger = logger;
        }
        [EventHandlerFunc("test")]
        public async Task<DefaultEventHandlerResponse> SubscribeByUserInfoEvent(EventHandleRequest<TestEventDto> input)
        {
            logger.LogInformation($"订阅器收到消息：{JsonSerializer.Serialize(input.GetData(), new JsonSerializerOptions() { Encoder = JavaScriptEncoder.Create(UnicodeRanges.All) })}");
            return await Task.FromResult(DefaultEventHandlerResponse.Default());
        }
    }
}
