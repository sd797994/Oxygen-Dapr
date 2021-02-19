using Autofac;
using Autofac.Core;
using Autofac.Core.Lifetime;
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
        private static ISharingLifetimeScope Container;
        public KestrelServerHandler(ILogger logger, IMessageHandler messageHandler, ILifetimeScope container)
        {
            this.logger = logger;
            this.messageHandler = messageHandler;
            Container = ((LifetimeScope)container).RootLifetimeScope;
        }
        public void BuildHandler(IApplicationBuilder app, ISerialize serialize)
        {
            RequestDelegateFactory.CreateDelegate(logger, messageHandler, out List<SubscribeModel> subDelegate).ForEach(x =>
            {
                app.Map(x.Path, handle =>
                {
                    handle.MapWhen(p => p.Request.Method.Equals("POST"), builder =>
                    {
                        builder.Run(async ctx =>
                        {
                            using var lifetimescope = Container.BeginLifetimeScope();//每次从静态根容器引用构造一个独立的生命周期范围
                            await x.Excute(ctx, lifetimescope);
                        });
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
