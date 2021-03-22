using Autofac;
using Oxygen.ProxyGenerator.Implements;
using Oxygen.ProxyGenerator.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Oxygen.Common.Implements;

namespace Oxygen.ProxyGenerator
{
    public class Module : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ThisAssembly).Where(x => !ReflectionHelper.IsSystemType(x))
                .AsImplementedInterfaces().Where(x =>!(x is IRemoteMessageSenderDelegate))
                .InstancePerLifetimeScope();
            RemoteProxyGenerator.CreateRemoteProxyAndRegisterInIocContainer(builder);
        }
    }
}
