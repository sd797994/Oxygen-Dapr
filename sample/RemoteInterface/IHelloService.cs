using Oxygen.Client.ServerSymbol;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RemoteInterface
{
    [RemoteService("testservice", "hello")]
    public interface IHelloService
    {
        [RemoteFunc]
        Task<OutDto> GetUserInfo(InputDto input);
    }
    public class InputDto
    {
        public string name { get; set; }
    }
    public class OutDto
    {
        public string word { get; set; }
    }
}
