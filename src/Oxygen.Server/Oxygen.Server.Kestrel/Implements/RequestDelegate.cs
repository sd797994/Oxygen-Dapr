using Microsoft.AspNetCore.Http;
using Oxygen.Client.ServerSymbol;
using Oxygen.Common.Interface;
using Oxygen.ProxyGenerator.Implements;
using Oxygen.Server.Kestrel.Interface;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    internal class RequestDelegate<Tin, Tout> : BaseRequestDelegate where Tin : class, new() where Tout : class
    {
        private readonly ILogger logger;
        private readonly IMessageHandler messageHandler;
        public RequestDelegate(string serverName, MethodInfo method, object target, ILogger logger, IMessageHandler messageHandler)
        {
            Path = new PathString($"/{serverName}/{method.Name}".ToLower());
            MethodDelegate = (Func<Tin, Task<Tout>>)method.CreateDelegate(typeof(Func<Tin, Task<Tout>>), target);
            this.logger = logger;
            this.messageHandler = messageHandler;
        }
        internal Func<Tin, Task<Tout>> MethodDelegate { get; set; }
        internal override async Task Excute(HttpContext ctx)
        {
            byte[] result = default;
            ctx.Response.ContentType = "application/json";
            var messageType = MessageType.Json;
            try
            {
                if (ctx.Request.ContentType == "application/x-msgpack")
                {
                    ctx.Response.ContentType = "application/x-msgpack";
                    messageType = MessageType.MessagePack;
                }
                var messageobj = await messageHandler.ParseMessage<Tin>(ctx, messageType);
                var localCallbackResult = await LocalMethodAopProvider.UsePipelineHandler(messageobj, MethodDelegate);
                if (localCallbackResult != null)
                {
                    result = messageHandler.BuildMessage(localCallbackResult, messageType);
                }
                else
                {
                    ctx.Response.StatusCode = 404;
                }
            }
            catch (Exception e)
            {
                logger.LogError("服务端消息处理异常: " + e.Message);
                ctx.Response.StatusCode = 502;
            }
            finally
            {
                await ctx.Response.Body.WriteAsync(result, 0, result.Length);
            }
        }
    }
}
