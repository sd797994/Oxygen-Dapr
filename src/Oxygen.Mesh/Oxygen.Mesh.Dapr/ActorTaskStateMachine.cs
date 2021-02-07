using Autofac;
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
    public class ActorAsyncStateMachine<TService, TInput, TOutput, TActorModel> : IAsyncStateMachine where TActorModel : ActorStateModel
    {
        public int state;
        public AsyncTaskMethodBuilder<TOutput> builder;
        private ILifetimeScope lifetimeScope;
        private Func<TService, TInput, Task<TOutput>> func;
        private TInput input;
        private TService service;
        private ILifetimeScope tempscope;
        private TaskAwaiter<TOutput> awaiter;
        private BasicActor<TActorModel> actor;

        public ActorAsyncStateMachine(BasicActor<TActorModel> actor, ILifetimeScope lifetimeScope, Func<TService, TInput, Task<TOutput>> func, TInput input)
        {
            this.actor = actor;
            this.lifetimeScope = lifetimeScope;
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
            tempscope = tempscope ?? lifetimeScope.BeginLifetimeScope();
            var taskIsCompleted = false;
            try
            {
                service = service ?? tempscope.Resolve<TService>();
                if (num == 0)
                {
                    localAwaiter = awaiter;
                    awaiter = default;
                    num = state = -1;
                }
                else
                {
                    (service as BaseActorService<TActorModel>).ActorData = this.actor.ActorData;
                    localAwaiter = func(service, input).GetAwaiter();
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
                taskIsCompleted = true;
                this.actor.ActorData = (service as BaseActorService<TActorModel>).ActorData;
            }
            catch (Exception exx)
            {
                state = -2;
                builder.SetException(exx);
            }
            finally
            {
                if (taskIsCompleted)
                    tempscope.Dispose();
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
