using Oxygen.Common.Implements;
using Oxygen.Mesh.Dapr.Model;
using Oxygen.ProxyGenerator.Implements;
using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Mesh.Dapr
{
    public class ActorAsyncStateMachine<TService, TInput, TOutput, TActorModel> : IAsyncStateMachine where TActorModel : ActorStateModel where TService : BaseActorService<TActorModel>
    {
        public int state;
        public AsyncTaskMethodBuilder<TOutput> builder;
        private TService service;
        private Func<TInput, Task<TOutput>> func;
        private TInput input;
        private TaskAwaiter<TOutput> awaiter;
        private BasicActor<TActorModel> actor;

        public ActorAsyncStateMachine(BasicActor<TActorModel> actor, TService service, Func<TInput, Task<TOutput>> func, TInput input)
        {
            this.actor = actor;
            this.service = service;
            this.func = func;
            this.input = input;
            this.builder = AsyncTaskMethodBuilder<TOutput>.Create();
            this.state = -1;
        }
        public void MoveNext()
        {
            TOutput result = default;
            TaskAwaiter<TOutput> localAwaiter;
            ActorAsyncStateMachine<TService, TInput, TOutput, TActorModel> stateMachine;
            int num = state;
            try
            {
                if (num == 0)
                {
                    localAwaiter = awaiter;
                    awaiter = default;
                    num = state = -1;
                }
                else
                {
                    service.ActorData = this.actor.ActorData;
                    localAwaiter = func(input).GetAwaiter();
                    if (!localAwaiter.IsCompleted)
                    {
                        num = state = 0;
                        awaiter = localAwaiter;
                        stateMachine = this;
                        builder.AwaitUnsafeOnCompleted(ref localAwaiter, ref stateMachine);
                        return;
                    }
                }
                result = localAwaiter.GetResult();
                this.actor.ActorData = service.ActorData;
            }
            catch (Exception exx)
            {
                state = -2;
                builder.SetException(exx);
            }
            state = -2;
            builder.SetResult(result);
        }

        public void SetStateMachine(IAsyncStateMachine stateMachine)
        {
            builder.SetStateMachine(stateMachine);
        }
    }
}
