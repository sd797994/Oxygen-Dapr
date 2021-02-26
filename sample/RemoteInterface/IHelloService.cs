using Oxygen.Client.ServerSymbol;
using Oxygen.Client.ServerSymbol.Actors;
using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Client.ServerSymbol.Store;
using Oxygen.Mesh.Dapr;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RemoteInterface
{
    [RemoteService("testservice", "hello")]
    public interface IHelloService
    {
        [RemoteFunc(FuncType.Invoke)]
        Task<OutDto> GetUserInfo(InputDto input);
        [RemoteFunc(FuncType.Invoke)]
        Task<OutDto> GetState(InputDto input);
        [RemoteFunc(FuncType.Invoke)]
        Task<OutDto> Test();
    }
    [RemoteService("testservice", "helloactor")]
    public interface IHelloActorService : IActorService
    {
        [RemoteFunc(FuncType.Actor)]
        Task<OutDto> GetUserInfoByActor(ActorInputDto input);
    }
    public class ActorInputDto : ActorSendDto
    {
        public string Name { get; set; }
        public override string ActorId { get; set; }
    }
    public class InputDto
    {
        public string name { get; set; }
        public int id { get; set; }
        public bool getbool { get; set; }
    }
    public class OutDto
    {
        public string Word { get; set; }
    }
    public class TestEventDto
    {
        public string myword { get; set; }
    }
    public class TestStateDto : StateStore
    {
        public TestStateDto(string key)
        {
            this.Key = key;
        }
        public TestStateDto(string key, object data)
        {
            this.Key = key;
            this.Data = data;
        }
        public override string Key { get; set; }
        public override object Data { get; set; }
    }
    public class MyTestStateContent
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}
