using Dapr.Actors.AspNetCore;
using Dapr.Actors.Runtime;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Oxygen.Client.ServerSymbol;
using Oxygen.Common.Implements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Oxygen.Mesh.Dapr
{
    public class ActorServiceFactory
    {
        public static void RegisterActorService(object app)
        {
            ((IWebHostBuilder)app).UseActors(actorRuntime => CreateDelegate(actorRuntime));
        }
        internal static void CreateDelegate(ActorRuntime actorRuntime)
        {
            //获取所有标记为remote的servie
            var remoteservice = ReflectionHelper.GetTypesByAttributes(true, typeof(RemoteServiceAttribute));
            //获取所有标记为remote的method构造具体的delegate
            remoteservice.ToList().ForEach(x => {
                var srvAttr = ReflectionHelper.GetAttributeProperyiesByType<RemoteServiceAttribute>(x);
                ReflectionHelper.GetMethodByFilter(x, typeof(RemoteFuncAttribute)).ToList().ForEach(y =>
                {
                    var funcAttr = ReflectionHelper.GetAttributeProperyiesByMethodInfo<RemoteFuncAttribute>(y);
                    //生成服务调用代理
                    if (funcAttr.funcType == FuncType.Actor)
                    {
                        //Func<ActorTypeInformation, ActorService> createFunc = (info) => new ActorService(info, (actorService, actorId) =>
                        //{
                        //    return Activator.CreateInstance(typeof(GoodsService), new object[] { actorService, actorId }) as Actor;
                        //});
                        //typeof(ActorRuntime).GetMethod("RegisterActor").MakeGenericMethod(typeof(GoodsService)).Invoke(actorRuntime, new object[] { createFunc });
                    }
                });
            });
        }
    }
}
