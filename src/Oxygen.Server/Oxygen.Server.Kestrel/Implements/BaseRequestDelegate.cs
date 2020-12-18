using Autofac;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    internal abstract class BaseRequestDelegate
    {
        internal PathString Path { get; set; }
        internal abstract Task Excute(HttpContext ctx, ILifetimeScope lifetimeScope);
    }
}
