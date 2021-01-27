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
        private readonly ILifetimeScope lifetimeScope;
        public ActorStateMessage actorStateMessage;
        public bool registerTimerState;
        public BasicActor(ActorService actorService, ActorId actorId, ILifetimeScope lifetimeScope) : base(actorService, actorId)
        {
            this.lifetimeScope = lifetimeScope;
            actorStateMessage = new ActorStateMessage() { ActorName = typeof(T).FullName };
            registerTimerState = false;
        }
        /// <summary>
        /// actor激活事件
        /// </summary>
        /// <returns></returns>
        protected override async Task OnActivateAsync()
        {
            if (ActorData == null)
            {
                var result = await StateManager.TryGetStateAsync<T>("ActorData");
                if (result.HasValue)
                {
                    ActorData = result.Value;
                    if (ActorData != null)
                    {
                        actorStateMessage.ActorData = ActorData;
                        //激活actor之后立即发送一次持久化消息，避免上一个actor关闭时没有成功发送持久化消息
                        await lifetimeScope.Resolve<IMediator>().Publish(actorStateMessage);
                        //为actor注册定时器定时发送持久化消息
                        if (ActorData.AutoSave == true && ActorData.ReminderSeconds > 0)
                        {
                            registerTimerState = true;
                            await RegisterTimer(ActorData.ReminderSeconds);
                        }
                    }
                }
            }
            await Task.CompletedTask;
        }
        public async Task RegisterTimer(int reminderSeconds)
        {
            await RegisterTimerAsync("SaveActorDataTimer", this.TimerCallBack, null, TimeSpan.FromSeconds(5), TimeSpan.FromSeconds(reminderSeconds));
        }
        public async Task UnRegisterTimer()
        {
            await UnregisterReminderAsync("SaveActorDataTimer");
        }
        private async Task TimerCallBack(object data)
        {
            actorStateMessage.ActorData = ActorData;
            await lifetimeScope.Resolve<IMediator>().Publish(actorStateMessage);
            await Task.CompletedTask;
        }
        /// <summary>
        /// actor业务处理后置事件
        /// </summary>
        /// <param name="actorMethodContext"></param>
        /// <returns></returns>
        protected override async Task OnPostActorMethodAsync(ActorMethodContext actorMethodContext)
        {
            if (ActorData != null && ActorData.AutoSave)
            {
                if (ActorData.IsDelete)
                {
                    if (await StateManager.TryRemoveStateAsync("ActorData"))
                    {
                        ActorData = null;
                        await UnRegisterTimer();
                    }
                }
                else
                {
                    await StateManager.SetStateAsync("ActorData", ActorData);
                    if (registerTimerState == false && ActorData.ReminderSeconds > 0)
                    {
                        registerTimerState = true;
                        await RegisterTimer(ActorData.ReminderSeconds);
                    }
                    else if (ActorData.ReminderSeconds == 0)
                    {
                        //如果开启自动保存，但是没有设置定期更新时间，则立即触发一次保存
                        actorStateMessage.ActorData = ActorData;
                        await lifetimeScope.Resolve<IMediator>().Publish(actorStateMessage);
                    }
                }
            }
            await Task.CompletedTask;
        }
        /// <summary>
        /// actor销毁事件
        /// </summary>
        /// <returns></returns>
        protected override async Task OnDeactivateAsync()
        {
            //actor被回收时需要发送持久化消息
            actorStateMessage.ActorData = ActorData;
            await lifetimeScope.Resolve<IMediator>().Publish(actorStateMessage);
        }
    }
}
