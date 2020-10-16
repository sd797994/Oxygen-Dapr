using Autofac;
using Oxygen.Common.Implements;
using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.IServer
{
    public class Module : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ReflectionHelper.GetAssemblyByInterface<IServer>())
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();
        }
    }
}
