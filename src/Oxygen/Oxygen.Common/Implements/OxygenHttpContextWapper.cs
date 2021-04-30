using Autofac;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Common.Implements
{
    public class OxygenHttpContextWapper
    {
        public string RoutePath { get; set; }
        public ILifetimeScope RequestService { get; set; }
        public Dictionary<string, string> Headers { get; set; }
        public Dictionary<string, string> Cookies { get; set; }
        public HttpResponse HttpResponse { get; set; }
        public OxygenHttpContextWapper(string routePath, ILifetimeScope requestService, Dictionary<string, string> headers, Dictionary<string, string> cookies, HttpResponse httpResponse)
        {
            RoutePath = routePath;
            Headers = headers;
            Cookies = cookies;
            RequestService = requestService;
            HttpResponse = httpResponse;
        }
    }
}
