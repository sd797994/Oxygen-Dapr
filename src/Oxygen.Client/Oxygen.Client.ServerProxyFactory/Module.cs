using Autofac;
using Oxygen.ProxyGenerator.Implements;
using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Client.ServerProxyFactory
{
    public class Module : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ThisAssembly)
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();
        }
    }
}
