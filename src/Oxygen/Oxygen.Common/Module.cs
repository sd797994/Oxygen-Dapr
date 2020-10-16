using Autofac;
using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Common
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
