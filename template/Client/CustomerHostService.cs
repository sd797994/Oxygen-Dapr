using Microsoft.Extensions.Hosting;
using Oxygen.Client.ServerProxyFactory.Interface;
using Oxygen.Common.Interface;
using RemoteInterface;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Client
{
    public class CustomerHostService : IHostedService
    {
        private readonly ISerialize serialize;
        private readonly IServiceProxyFactory serviceProxyFactory;
        public CustomerHostService(ISerialize serialize, IServiceProxyFactory serviceProxyFactory)
        {
            this.serialize = serialize;
            this.serviceProxyFactory = serviceProxyFactory;
        }
        public async Task StartAsync(CancellationToken cancellationToken)
        {
            Console.WriteLine("按下任意键开始测试，回车1次，数字次数，q退出");
            Console.ReadKey();
            var client = new HttpClient();
            var max = 1;
            while (true)
            {
                var succ = 0;
                var fail = 0;
                var _event = new AutoResetEvent(false);
                Stopwatch _sw = new Stopwatch();
                _sw.Start();
                Parallel.For(0, max, async i =>
                {
                     var helloService = serviceProxyFactory.CreateProxy<IHelloService>();
                    var result = await helloService.GetUserInfo(new InputDto() { name = "小明" });
                    if (result != null)
                        Interlocked.Increment(ref succ);
                    else
                        Interlocked.Increment(ref fail);
                    if (succ + fail == max)
                        _event.Set();
                });
                _event.WaitOne();
                _sw.Stop();
                Console.WriteLine($"完成{max}次调用，成功{succ}次，失败{fail}次，累计耗时{_sw.ElapsedMilliseconds}ms");
                var q = Console.ReadLine();
                if (q == "q")
                    break;
                else if (int.TryParse(q, out int _max))
                    max = _max;
            }
            await Task.CompletedTask;
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {
            await Task.CompletedTask;
        }
    }
}
