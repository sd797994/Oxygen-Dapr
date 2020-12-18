using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Oxygen.Common.Implements
{
    public static class HttpContextExtension
    {
        public static AsyncLocal<OxygenHttpContextWapper> ContextWapper = new AsyncLocal<OxygenHttpContextWapper>();
        public static Dictionary<string, string> GetHeaderDictionary(this IHeaderDictionary headerDictionary)
        {
            var result = new Dictionary<string, string>();
            foreach(var item in headerDictionary)
            {
                result.Add(item.Key,item.Value);
            }
            return result;
        }
        public static Dictionary<string, string> GetCookieDictionary(this IRequestCookieCollection cookieCollection)
        {
            var result = new Dictionary<string, string>();
            foreach (var item in cookieCollection)
            {
                result.Add(item.Key, item.Value);
            }
            return result;
        }
    }
}
