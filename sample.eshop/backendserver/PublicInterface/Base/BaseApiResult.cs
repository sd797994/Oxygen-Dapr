using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PublicInterface.Base
{
    public class BaseApiResult<T>
    {
        public int Code { get; set; }
        public T Data { get; set; }
        public string ErrMessage { get; set; }
        public bool IsError()
        {
            return Code == -1 || !string.IsNullOrEmpty(ErrMessage);
        }
    }
}
