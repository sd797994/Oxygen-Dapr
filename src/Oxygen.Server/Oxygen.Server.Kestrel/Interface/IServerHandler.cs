using Microsoft.AspNetCore.Builder;
using Oxygen.Common.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Server.Kestrel.Interface
{
    public interface IServerHandler
    {
        void BuildHandler(IApplicationBuilder app, ISerialize serialize);
    }
}
