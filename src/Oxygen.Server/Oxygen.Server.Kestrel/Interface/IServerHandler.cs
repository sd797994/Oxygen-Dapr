using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Server.Kestrel.Interface
{
    public interface IServerHandler
    {
        void BuildHandler(IApplicationBuilder app);
    }
}
