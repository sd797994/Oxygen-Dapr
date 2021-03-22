using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Oxygen.Common.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using ILogger = Microsoft.Extensions.Logging.ILogger;

namespace Oxygen.Common.Implements
{
    internal class ConsoleLog : Interface.ILogger
    {

        private readonly ILogger _logger;
        public ConsoleLog(ILogger<ConsoleLog> logger)
        {
            _logger = logger;
        }
        /// <summary>
        /// 普通信息
        /// </summary>
        /// <param name="message"></param>
        public void LogInfo(string message)
        {
            _logger.LogInformation($"{DateTime.Now}|OXYGEN_INFO|{message}");
        }
        /// <summary>
         /// 普通信息
         /// </summary>
         /// <param name="message"></param>
        public void LogWarn(string message)
        {
            _logger.LogWarning($"{DateTime.Now}|OXYGEN_WARN|{message}");
        }
        /// <summary>
        /// 异常信息
        /// </summary>
        /// <param name="message"></param>
        public void LogError(string message)
        {
            _logger.LogError($"{DateTime.Now}|OXYGEN_ERROR|{message}");
        }
    }
}
