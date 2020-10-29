using RemoteInterface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Server
{
    public class HelloServiceImpl : IHelloService
    {
        public async Task<OutDto> GetUserInfo(InputDto input)
        {
            return await Task.FromResult(new OutDto() { word = $"hello {input?.name}" });
        }
    }
}
