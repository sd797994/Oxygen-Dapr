using Oxygen.Client.ServerSymbol;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RemoteInterface
{
    [RemoteService("callservice", "call")]
    public interface ICallService
    {
        [RemoteFunc]
        Task<InputDto> RemoteCallTest(InputDto input);
        [RemoteFunc]
        Task<MultipleTestOutput> MultipleTest(MultipleTestInput input);
    }
    public class MultipleTestInput
    {
        public int Times { get; set; }
    }
    public class MultipleTestOutput
    {
        public int AllTimes { get; set; }
        public int SuccTimes { get; set; }
        public int FailTimes { get; set; }
        public long CustTimes { get; set; }
        public string Detail { get; set; }
    }
}
