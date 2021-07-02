using Autofac;
using Microsoft.Extensions.Logging;
using Oxygen.Client.ServerProxyFactory.Interface;
using Oxygen.Mesh.Dapr;
using Oxygen.Mesh.Dapr.Model;
using RemoteInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClienActorSample
{
    public class HelloActorService : BaseActorService<MyActor>, IHelloActorService
    {
        private readonly ILogger<HelloActorService> logger;
        private readonly IStateManager stateManager;
        private readonly IHelloRepository helloRepository;
        public HelloActorService(ILogger<HelloActorService> logger, IStateManager stateManager, IHelloRepository helloRepository)
        {
            this.logger = logger;
            this.stateManager = stateManager;
            this.helloRepository = helloRepository;
        }
        public async Task<OutDto> GetUserInfoByActor(ActorInputDto input)
        {
            if (ActorData == null)
                ActorData = await helloRepository.GetData();
            ActorData.Index++;
            if (ActorData.Index == 10)
                ActorData.DeleteModel();
            return await Task.FromResult(new OutDto() { Word = $"hello {input.Name},your id is {ActorData.Index}" });
        }

        public override async Task SaveData(MyActor data, ILifetimeScope scope)
        {
            if (data != null)
                await helloRepository.SaveData(data);
            await Task.CompletedTask;
        }
    }
}
