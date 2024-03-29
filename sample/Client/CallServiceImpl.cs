﻿using Autofac;
using Dapr.Actors;
using Dapr.Actors.Client;
using Microsoft.Extensions.Logging;
using Oxygen.Client.ServerProxyFactory.Interface;
using Oxygen.Common.Interface;
using Oxygen.Mesh.Dapr;
using Oxygen.Mesh.Dapr.Model;
using RemoteInterface;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Reflection;
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
        private readonly IEventBus eventBus;
        private readonly IStateManager stateManager;
        private readonly ISerialize serialize;
        public CallServiceImpl(IServiceProxyFactory serviceProxyFactory, ISerialize serialize, IEventBus eventBus, IStateManager stateManager)
        {
            this.serviceProxyFactory = serviceProxyFactory;
            this.eventBus = eventBus;
            this.stateManager = stateManager;
            this.serialize = serialize;
        }
        public async Task<InputDto> RemoteCallTest(InputDto input)
        {
            var helloService = serviceProxyFactory.CreateProxy<IHelloService>();
            var test = await helloService.GetHtml();
            var helloactorService = serviceProxyFactory.CreateActorProxy<IHelloActorService>();
            await stateManager.SetState(new TestStateDto("mykey", true));
            var getState = await stateManager.GetState<bool>(new TestStateDto("mykey"));
            var delState = await stateManager.DelState(new TestStateDto("mykey"));
            var invokeresult = await helloService.GetUserInfo(new InputDto() { name = "xiaoming" });
            var invokenoinputresult = await helloService.Test();
            var eventresult = await eventBus.SendEvent("test", new TestEventDto() { myword = "abc" });
            var actorresult = await helloactorService.GetUserInfoByActor(new ActorInputDto() { Name = "xiaoming", ActorId = "1" });
            return new InputDto() { name = $"RPC无参调用成功，回调：{JsonSerializer.Serialize(invokenoinputresult)},RPC有参调用成功，回调：{JsonSerializer.Serialize(invokeresult)},事件发送{(eventresult != null ? "成功" : "失败")},状态写入成功，值：{getState},actor调用成功，回调：{JsonSerializer.Serialize(actorresult)}" };
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
                var invokeresult = await helloService.GetUserInfo(new InputDto() { name = "小明" });
                var eventresult = await eventBus.SendEvent("test", new TestEventDto() { myword = "abc" });
                _sw_item.Stop();
                if (invokeresult != null)
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
            return await Task.FromResult(new MultipleTestOutput()
            {
                AllTimes = input.Times,
                SuccTimes = succ,
                FailTimes = fail,
                CustTimes = _sw.ElapsedMilliseconds,
                Detail = string.Join(",", times.Where(x => x > 100).ToList())
            });
        }
    }

}