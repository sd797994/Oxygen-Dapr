using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Oxygen.Common.Interface;
using Oxygen.Server.Kestrel.Interface;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    internal class KestrelHttpServer : IServer.IServer
    {
        private readonly ILogger logger;
        private readonly IServerHandler serverHandler;
        private IWebHost Host { get; set; }
        public KestrelHttpServer(ILogger logger, IServerHandler serverHandler)
        {
            this.logger = logger;
            this.serverHandler = serverHandler;
        }
        public async Task OpenServer(Action<object> middlewarebuilder = null, int port = 80)
        {
            var builder = new WebHostBuilder()
                      .UseKestrel(options =>
                      {
                          options.Listen(IPAddress.Any, port, listenOptions =>
                          {
                              listenOptions.Protocols = HttpProtocols.Http1;
                          });
                      })
                      .Configure(app =>
                      serverHandler.BuildHandler(app)
                      );
            middlewarebuilder?.Invoke(builder);
            Host = builder.Build();
            await Host.StartAsync();
            logger.LogInfo($"bind tcp 0.0.0.0:{port} to listen");
        }
        public async Task CloseServer()
        {
            await Host.StopAsync();
        }
    }
}
