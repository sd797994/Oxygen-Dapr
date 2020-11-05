using Autofac;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Internal;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using Oxygen.Server.Kestrel.Interface;
using Oxygen.Server.Kestrel.Interface.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    internal class KestrelServerHandler : IServerHandler
    {
        private readonly ILogger logger;
        private readonly IMessageHandler messageHandler;
        private readonly ILifetimeScope container;
        public KestrelServerHandler(ILogger logger, IMessageHandler messageHandler, ILifetimeScope container)
        {
            this.logger = logger;
            this.messageHandler = messageHandler;
            this.container = container;
        }
        public void BuildHandler(IApplicationBuilder app, ISerialize serialize)
        {
            RequestDelegateFactory.CreateDelegate(logger, messageHandler,out List<SubscribeModel> subDelegate).ForEach(x =>
            {
                app.Map(x.Path, handle =>
                {
                    handle.MapWhen(p => p.Request.Method.Equals("POST"), builder =>
                    {
                        builder.Run(ctx=>x.Excute(ctx, container));
                    });
                });
            });
            if (subDelegate.Any())
            {
                app.Map("/dapr/subscribe", handle => handle.Run(async ctx =>
                {
                    ctx.Response.ContentType = "application/json";
                    await ctx.Response.WriteAsync(serialize.SerializesJson(subDelegate));
                }));
            }
        }
    }
}
