using Microsoft.Extensions.Logging;
using Oxygen.Client.ServerSymbol;
using RemoteInterface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Server
{
    public class HelloServiceImpl : IHelloService
    {
        private readonly ILogger<HelloServiceImpl> logger;
        public HelloServiceImpl(ILogger<HelloServiceImpl> logger)
        {
            this.logger = logger;
        }
        public async Task<OutDto> GetUserInfo(InputDto input)
        {
            return await Task.FromResult(new OutDto() { word = $"hello {input?.name}" });
        }

        public async Task<OutDto> GetUserInfoByActor(InputDto input)
        {
            return await Task.FromResult(new OutDto() { word = $"hello {input?.name}" });
        }
    }
}
