using Autofac;
using Oxygen.Common.Implements;
using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Server.Kestrel
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
