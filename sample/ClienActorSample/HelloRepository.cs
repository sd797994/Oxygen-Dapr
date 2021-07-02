using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClienActorSample
{
    public class HelloRepository : IHelloRepository
    {
        public Guid? Id { get; set; }
        public HelloRepository()
        {
            Id = Id ?? Guid.NewGuid();
        }
        public async Task SaveData(MyActor actor)
        {
            Console.WriteLine($"仓储实例ID：{Id}，持久化对象：{actor?.Index}");
            await Task.CompletedTask;
        }

        public async Task<MyActor> GetData()
        {
            return await Task.FromResult(new MyActor() { Index = 0, AutoSave = true });
        }
    }
}
