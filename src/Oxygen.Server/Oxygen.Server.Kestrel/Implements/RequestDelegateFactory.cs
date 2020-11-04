﻿using Oxygen.Client.ServerSymbol;
using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using Oxygen.Server.Kestrel.Interface;
using Oxygen.Server.Kestrel.Interface.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    internal static class RequestDelegateFactory
    {
        internal static List<BaseRequestDelegate> CreateDelegate(ILogger logger, IMessageHandler messageHandler, out List<SubscribeModel> subDelegate)
        {
            var result = new List<BaseRequestDelegate>();
            var _subDelegate = new List<SubscribeModel>();
            //获取所有标记为remote的servie
            var remoteservice = ReflectionHelper.GetTypesByAttributes(true, typeof(RemoteServiceAttribute));
            //获取所有标记为remote的method构造具体的delegate
            remoteservice.ToList().ForEach(x =>
            {
                var srvAttr = ReflectionHelper.GetAttributeProperyiesByType<RemoteServiceAttribute>(x);
                ReflectionHelper.GetMethodByFilter(x, typeof(RemoteFuncAttribute)).ToList().ForEach(y =>
                {
                    var funcAttr = ReflectionHelper.GetAttributeProperyiesByMethodInfo<RemoteFuncAttribute>(y);
                    //生成服务调用代理
                    if (funcAttr.funcType == FuncType.Normal)
                    {
                        var requestDelegate = CreateRequestDelegate(x, srvAttr?.ServerName ?? x.Name, y, logger, messageHandler);
                        if (requestDelegate != null)
                        {
                            result.Add(requestDelegate);
                        }
                    }
                });
            });
            //为所有事件处理器生成代理并注册到dapr
            var eventhandlers = ReflectionHelper.GetTypeByInterfaces<IEventHandler>();
            eventhandlers.ToList().ForEach(x =>
            {
                x.GetMethods().ToList().ForEach(y =>
                {
                    if(y.ReturnType == typeof(Task<DefaultEventHandlerResponse>) && y.GetParameters().Any() && y.GetParameters().FirstOrDefault().ParameterType.BaseType == typeof(IEvent))
                    {
                        var requestDelegate = CreateRequestDelegate(x, x.Name, y, logger, messageHandler);
                        if (requestDelegate != null)
                        {
                            result.Add(requestDelegate);
                            var param = Activator.CreateInstance(y.GetParameters().FirstOrDefault().ParameterType) as IEvent;
                            //todo pubsubname为dapr外部申明的组件名，此处后期需要扩展为从配置节读取
                            _subDelegate.Add(new SubscribeModel("pubsub", param.Topic, requestDelegate.Path));
                        }
                    }
                });
            });
            subDelegate = _subDelegate;
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
