using Microsoft.AspNetCore.Http;
using Oxygen.IServer;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Interface
{
    public interface IMessageHandler
    {
        /// <summary>
        /// 解析来自客户端的请求消息
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="message"></param>
        /// <returns></returns>
        Task<T> ParseMessage<T>(HttpContext message, MessageType messageType) where T : class, new();
        /// <summary>
        /// 构造返回消息
        /// </summary>
        /// <param name="data"></param>
        /// <param name="code"></param>
        /// <param name="message"></param>
        /// <returns></returns>
        byte[] BuildMessage<T>(T data, MessageType messageType);
    }
}
