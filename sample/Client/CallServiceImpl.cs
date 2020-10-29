using Oxygen.Client.ServerProxyFactory.Interface;
using RemoteInterface;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;

namespace Client
{
    public class CallServiceImpl : ICallService
    {
        private readonly IServiceProxyFactory serviceProxyFactory;
        public CallServiceImpl(IServiceProxyFactory serviceProxyFactory)
        {
            this.serviceProxyFactory = serviceProxyFactory;
        }
        public async Task<MultipleTestOutput> MultipleTest(MultipleTestInput input)
        {
            var max = input.Times <= 0 ? 1 : input.Times;
            var succ = 0;
            var fail = 0;
            var _event = new AutoResetEvent(false);
            ConcurrentBag<long> times = new ConcurrentBag<long>();
            Stopwatch _sw = new Stopwatch();
            _sw.Start();
            Parallel.For(0, max, async i =>
            {
                var helloService = serviceProxyFactory.CreateProxy<IHelloService>();
                Stopwatch _sw_item = new Stopwatch();
                _sw_item.Start();
                var result = await helloService.GetUserInfo(new InputDto() { name = "小明" });
                _sw_item.Stop();
                if (result != null)
                {
                    Interlocked.Increment(ref succ);
                    times.Add(_sw_item.ElapsedMilliseconds);
                }
                else
                    Interlocked.Increment(ref fail);
                if (succ + fail == max)
                    _event.Set();
            });
            _event.WaitOne();
            _sw.Stop();
            return new MultipleTestOutput()
            {
                AllTimes = input.Times,
                SuccTimes = succ,
                FailTimes = fail,
                CustTimes = _sw.ElapsedMilliseconds,
                Detail = string.Join(",", times.Where(x => x > 100).ToList())
            };
        }
    }
}
