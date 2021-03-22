using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Common.Interface
{
    public interface ILogger
    {
        /// <summary>
        /// 异常日志
        /// </summary>
        /// <param name="message"></param>
        void LogError(string message);
        /// <summary>
        /// 警告日志
        /// </summary>
        /// <param name="message"></param>
        void LogWarn(string message);
        /// <summary>
        /// 信息日志
        /// </summary>
        /// <param name="message"></param>
        void LogInfo(string message);
    }
}
