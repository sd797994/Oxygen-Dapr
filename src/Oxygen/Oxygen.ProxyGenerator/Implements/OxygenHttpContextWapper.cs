using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.ProxyGenerator.Implements
{
    public class OxygenHttpContextWapper
    {
        public string RoutePath { get; set; }
        public Dictionary<string, string> Headers { get; set; }
        public Dictionary<string, string> Cookies { get; set; }
        public OxygenHttpContextWapper(string routePath, Dictionary<string, string> headers, Dictionary<string, string> cookies)
        {
            RoutePath = routePath;
            Headers = headers;
            Cookies = cookies;
        }
    }
}
