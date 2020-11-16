using Oxygen.Client.ServerSymbol;
using Oxygen.Client.ServerSymbol.Actors;
using Oxygen.Client.ServerSymbol.Events;
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
        [RemoteFunc(FuncType.Normal)]
        Task<OutDto> GetUserInfo(InputDto input);
        [RemoteFunc(FuncType.Actor)]
        Task<OutDto> GetUserInfoByActor(ActorInputDto input);
    }
    public class ActorInputDto : ActorSendDto
    {
        public string name { get; set; }
        public override string ActorId { get; set; }
    }
    public class InputDto
    {
        public string name { get; set; }
    }
    public class OutDto
    {
        public string word { get; set; }
    }
    public class TestEventDto : IEvent
    {
        public string name { get; set; }
        public override string Topic { get => "test"; }
    }
}
