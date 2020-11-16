using Oxygen.Client.ServerSymbol;
using Oxygen.Common.Implements;
using Oxygen.ProxyGenerator.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.ProxyGenerator.Implements
{
    public class RemoteDispatchProxy<T> : RemoteDispatchProxyBase
    {
        protected override object Invoke(MethodInfo targetMethod, object[] args)
        {
            var router = RemoteRouters.FirstOrDefault(x => x.Key.Equals(targetMethod.Name));
            if (router != null)
            {
                return router.SenderDelegate.Excute(router.HostName, router.RouterName, args[0], router.SendType);
            }
            else
            {
                return null;
            }
        }
    }
    public abstract class RemoteDispatchProxyBase : DispatchProxy
    {
        internal void InitRemoteRouters(Type interfaceType, string hostName, string routerName, IEnumerable<MethodInfo> remoteMethods)
        {
            RemoteRouters = new List<RemoteRouter>();
            remoteMethods.ToList().ForEach(x =>
            {
                var funcAttr = ReflectionHelper.GetAttributeProperyiesByMethodInfo<RemoteFuncAttribute>(x);
                //生成服务调用代理
                if (funcAttr.FuncType == FuncType.Normal || funcAttr.FuncType == FuncType.Actor)
                {
                    RemoteRouters.Add(new RemoteRouter()
                    {
                        Key = x.Name,
                        HostName = funcAttr.FuncType == FuncType.Actor ? $"/{interfaceType.Name}ActorImpl" : hostName,
                        RouterName = funcAttr.FuncType == FuncType.Actor ? $"/{x.Name}" : $"/{routerName}/{x.Name}".ToLower(),
                        InputType = x.GetParameters()[0].ParameterType,
                        SendType = funcAttr.FuncType == FuncType.Normal ? SendType.invoke : funcAttr.FuncType == FuncType.Actor ? SendType.actors : SendType.invoke,
                        MethodInfo = typeof(IRemoteMessageSender).GetMethod("SendMessage").MakeGenericMethod(x.ReturnParameter.ParameterType.GenericTypeArguments[0]),
                    });
                }
            });
        }
        internal void InitSenderDelegate()
        {
            RemoteRouters.ForEach(x => x.SenderDelegate = BuildSenderDelegate(x.MethodInfo,x.InputType));
        }
        protected class RemoteRouter
        {
            internal string Key { get; set; }
            internal string HostName { get; set; }
            internal string RouterName { get; set; }
            internal Type InputType { get; set; }
            internal MethodInfo MethodInfo { get; set; }
            internal SendType SendType { get; set; }
            internal IRemoteMessageSenderDelegate SenderDelegate { get; set; }
        }
        protected List<RemoteRouter> RemoteRouters { get; set; }

        IRemoteMessageSenderDelegate BuildSenderDelegate(MethodInfo methodInfo, Type inputType)
        {
            return (IRemoteMessageSenderDelegate)Activator.CreateInstance(typeof(RemoteMessageSenderDelegate<,>).MakeGenericType(inputType, methodInfo.ReturnType), methodInfo, OxygenIocContainer.Resolve<IRemoteMessageSender>());
        }
    }
}
