using Microsoft.AspNetCore.Http;
using Oxygen.Common.Interface;
using Oxygen.IServer;
using Oxygen.Server.Kestrel.Interface;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Server.Kestrel.Implements
{
    internal class HttpMessageHandler : IMessageHandler
    {
        private readonly ISerialize serialize;
        public HttpMessageHandler(ISerialize serialize)
        {
            this.serialize = serialize;
        }
        public byte[] BuildMessage<T>(T data, MessageType messageType)
        {
            if (messageType == MessageType.Json)
                return Encoding.UTF8.GetBytes(serialize.SerializesJson(data));
            else if (messageType == MessageType.MessagePack)
                return serialize.Serializes(data);
            else
                return default;
        }

        public async Task<T> ParseMessage<T>(HttpContext message, MessageType messageType) where T : class, new()
        {
            using (var buffer = new MemoryStream())
            {
                await message.Request.Body.CopyToAsync(buffer);
                byte[] bytes = buffer.ToArray();
                if (messageType == MessageType.Json)
                    return serialize.DeserializesJson<T>(Encoding.UTF8.GetString(bytes));
                else if (messageType == MessageType.MessagePack)
                    return serialize.Deserializes<T>(bytes);
                else
                    return new T();
            }
        }
    }
}
