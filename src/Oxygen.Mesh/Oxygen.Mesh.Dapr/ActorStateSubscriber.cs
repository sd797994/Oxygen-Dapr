using Autofac;
using MediatR;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using Oxygen.Mesh.Dapr.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Oxygen.Mesh.Dapr
{
    public class ActorStateSubscriber : INotificationHandler<ActorStateMessage>
    {
        public static Dictionary<string, Func<ActorStateModel, ILifetimeScope, Task>> Handlers = new Dictionary<string, Func<ActorStateModel, ILifetimeScope, Task>>();
        private readonly ILogger logger;
        private readonly ILifetimeScope lifetimeScope;
        public ActorStateSubscriber(ILogger logger, ILifetimeScope lifetimeScope)
        {
            this.logger = logger;
            this.lifetimeScope = lifetimeScope;
        }
        public static void RegisterHandler(string actorName, Func<ActorStateModel, ILifetimeScope, Task> handler)
        {
            if (!Handlers.TryAdd(actorName, handler))
            {
                OxygenIocContainer.Resolve<ILogger>().LogError($"Actor持久化处理器注册失败,Actor名：{actorName}");
            }
            else
            {
                OxygenIocContainer.Resolve<ILogger>().LogInfo($"Actor持久化处理器注册成功,Actor名：{actorName}");
            }
        }
        public async Task Handle(ActorStateMessage notification, CancellationToken cancellationToken)
        {
            if (Handlers.TryGetValue(notification.ActorName, out Func<ActorStateModel, ILifetimeScope, Task> handler))
            {
                try
                {
                    using var scope = lifetimeScope.BeginLifetimeScope();
                    await handler(notification.ActorData, scope);
                }
                catch (Exception e)
                {
                    logger.LogError($"{notification.ActorName}持久化处理失败,异常原因:{e.Message}");
                }
            }
            else
            {
                logger.LogError($"没有找到名为：{notification.ActorName}的持久化处理器,持久化失败");
            }
        }
    }
}
