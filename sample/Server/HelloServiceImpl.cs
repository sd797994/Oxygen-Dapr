using Autofac;
using Microsoft.Extensions.Logging;
using Oxygen.Client.ServerProxyFactory.Interface;
using Oxygen.Mesh.Dapr;
using Oxygen.Mesh.Dapr.Model;
using RemoteInterface;
using System;
using System.Threading.Tasks;

namespace Server
{
    public class HelloServiceImpl : IHelloService
    {
        private readonly ILogger<HelloServiceImpl> logger;
        private readonly IStateManager stateManager;
        public HelloServiceImpl(ILogger<HelloServiceImpl> logger, IStateManager stateManager)
        {
            this.logger = logger;
            this.stateManager = stateManager;
        }
        public async Task<OutDto> GetUserInfo(InputDto input)
        {
            return await Task.FromResult(new OutDto() { Word = $"hello {input?.name}" });
        }
        public async Task<OutDto> GetState(InputDto input)
        {
            var state = await stateManager.GetState<bool>(new TestStateDto(input.name));
            return await Task.FromResult(new OutDto() { Word = state.ToString() });
        }
        public async Task<OutDto> Test()
        {
            return await Task.FromResult(new OutDto() { Word = "noinput" });
        }

        public async Task<string> GetHtml()
        {
            return await Task.FromResult("<h1>hello</h1>");
        }
    }
}