using Microsoft.Extensions.Logging;
using Oxygen.Mesh.Dapr;
using Oxygen.Mesh.Dapr.Model;
using RemoteInterface;
using System;
using System.Threading.Tasks;

namespace Server
{
    public class HelloServiceImpl : BaseActorService<MyActor>, IHelloService
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
        public async Task<OutDto> GetUserInfoByActor(ActorInputDto input)
        {
            if (ActorData == null)
                ActorData = new MyActor() { Index = 0, AutoSave = true };
            ActorData.Index++;
            if (ActorData.Index == 10)
                ActorData.DeleteModel();
            return await Task.FromResult(new OutDto() { word = $"hello {ActorData.Index}" });
        }

        public override async Task SaveData()
        {
            Console.WriteLine("收到持久化消息的提醒!");
            await Task.CompletedTask;
        }
    }
    public class MyActor : ActorStateModel
    {
        public int Index { get; set; }
        public override bool AutoSave { get; set; }
    }
}