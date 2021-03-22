using Autofac;
using Oxygen.Common.Implements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Oxygen.Common
{
    public class Module : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ThisAssembly).Where(x => !ReflectionHelper.IsSystemType(x))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();
        }
    }
}
