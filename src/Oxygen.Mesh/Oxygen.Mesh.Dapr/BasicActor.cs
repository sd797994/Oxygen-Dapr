using Autofac;
using Dapr.Actors;
using Dapr.Actors.Runtime;
using MediatR;
using Oxygen.Mesh.Dapr.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace Oxygen.Mesh.Dapr
{

    public class BasicActor<T> : Actor where T : ActorStateModel
    {
        public T ActorData { get; set; }
        private string actorId;
        private readonly ILifetimeScope lifetimeScope;
        public ActorStateMessage actorStateMessage;
        public BasicActor(ActorService actorService, ActorId actorId, ILifetimeScope lifetimeScope) : base(actorService, actorId)
        {
            this.actorId = actorId.GetId();
            this.lifetimeScope = lifetimeScope;
            actorStateMessage = new ActorStateMessage() { ActorName = typeof(T).FullName };
        }
        protected override async Task OnPreActorMethodAsync(ActorMethodContext actorMethodContext)
        {
            if (ActorData == null)
            {
                var result = await StateManager.TryGetStateAsync<T>("ActorData");
                if (result.HasValue)
                {
                    ActorData = result.Value;
                    if (ActorData != null)
                    {
                        //激活actor之后立即发送一次持久化消息，避免上一个actor关闭时没有成功发送持久化消息
                        await lifetimeScope.Resolve<IMediator>().Publish(actorStateMessage);
                    }
                }
            }
            await Task.CompletedTask;
        }
        protected override async Task OnPostActorMethodAsync(ActorMethodContext actorMethodContext)
        {
            if (ActorData != null && ActorData.AutoSave)
            {
                if (ActorData.IsDelete)
                {
                    if (await StateManager.TryRemoveStateAsync("ActorData"))
                        ActorData = null;
                }
                else
                {
                    await StateManager.SetStateAsync("ActorData", ActorData);
                }
            }
            await Task.CompletedTask;
        }
        protected override async Task OnDeactivateAsync()
        {
            //actor被回收时需要发送持久化消息
            await lifetimeScope.Resolve<IMediator>().Publish(actorStateMessage);
        }
    }
}
