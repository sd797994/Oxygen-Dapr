using Autofac;
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

        public override async Task SaveData(ActorStateModel data, ILifetimeScope scope)
        {
            if (data != null)
                await scope.Resolve<IHelloRepository>().SaveData(data as MyActor);
            await Task.CompletedTask;
        }
    }
    public class MyActor : ActorStateModel
    {
        public int Index { get; set; }
        public override bool AutoSave { get; set; }
        public override int ReminderSeconds { get => 10; }
    }
    public interface IHelloRepository
    {
        Task SaveData(MyActor actor);
    }
    public class HelloRepository: IHelloRepository
    {
        public HelloRepository()
        {

        }
        public async Task SaveData(MyActor actor)
        {
            Console.WriteLine($"实例持久化中：{actor?.Index}");
            await Task.CompletedTask;
        }
    }
}