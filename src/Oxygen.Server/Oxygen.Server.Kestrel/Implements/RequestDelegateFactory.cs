using Oxygen.Client.ServerSymbol;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using Oxygen.Server.Kestrel.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Oxygen.Server.Kestrel.Implements
{
    internal static class RequestDelegateFactory
    {
        internal static List<BaseRequestDelegate> CreateDelegate(ILogger logger, IMessageHandler messageHandler)
        {
            var result = new List<BaseRequestDelegate>();
            //获取所有标记为remote的servie
            var remoteservice = ReflectionHelper.GetTypesByAttributes(true, typeof(RemoteServiceAttribute));
            //获取所有标记为remote的method构造具体的delegate
            remoteservice.ToList().ForEach(x => {
                var attr = ReflectionHelper.GetAttributeProperyiesByType<RemoteServiceAttribute>(x);
                ReflectionHelper.GetMethodByFilter(x, typeof(RemoteFuncAttribute)).ToList().ForEach(y =>
                {
                    var requestDelegate = CreateRequestDelegate(x, attr?.ServerName ?? x.Name, y, logger, messageHandler);
                    if (requestDelegate != null)
                        result.Add(requestDelegate);
                });
            });
            return result;
        }
        static Type DelegateType = typeof(RequestDelegate<,>);
        static BaseRequestDelegate CreateRequestDelegate(Type t, string serverName, MethodInfo m, ILogger logger, IMessageHandler messageHandler)
        {
            //所有rpc默认只能处理一个入参
            var inputType = m.GetParameters().FirstOrDefault().ParameterType;
            //ReturnType必须是一个task<T>
            var outputType = m.ReturnType.GetGenericArguments().FirstOrDefault();
            var genericdelegateType = DelegateType.MakeGenericType(inputType, outputType);
            var target = OxygenIocContainer.Resolve(t);
            if (target is DispatchProxy)
                return null;
            else
                return Activator.CreateInstance(genericdelegateType, new object[] { serverName, m, target, logger, messageHandler }) as BaseRequestDelegate;
        }
    }
}
