using MediatR;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
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
        public static Dictionary<string, Func<Task>> Handlers = new Dictionary<string, Func<Task>>();
        private readonly ILogger logger;
        public ActorStateSubscriber(ILogger logger)
        {
            this.logger = logger;
        }
        public static void RegisterHandler(string actorName, Func<Task> handler)
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
            if (Handlers.TryGetValue(notification.ActorName, out Func<Task> handler))
            {
                try
                {
                    logger.LogInfo($"查询到key为{notification.ActorName}的处理器，准备调用");
                    await handler();
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
