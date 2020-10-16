using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using Oxygen.ProxyGenerator.Interface;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.ProxyGenerator.Implements
{
    internal class RemoteMessageSender: IRemoteMessageSender
    {
        private readonly IHttpClientFactory httpClientFactory;
        private readonly ISerialize serialize;
        private readonly ILogger logger;
        public RemoteMessageSender(IHttpClientFactory httpClientFactory, ISerialize serialize, ILogger logger)
        {
            this.httpClientFactory = httpClientFactory;
            this.serialize = serialize;
            this.logger = logger;
        }
        async Task<T> IRemoteMessageSender.SendMessage<T>(string serverName, object input) where T : class
        {
            T result = default;
            try
            {
                var taskId = Guid.NewGuid();
                var sendMessage = BuildMessage(serverName, input);
                var responseMessage = await httpClientFactory.CreateClient().SendAsync(sendMessage);
                if (responseMessage.IsSuccessStatusCode)
                {
                    return ReceiveMessage<T>(await responseMessage.Content.ReadAsByteArrayAsync());
                }
                else
                {
                    logger.LogError($"客户端调用http请求异常,状态码：{responseMessage?.StatusCode}");
                }
            }
            catch (Exception e)
            {
                logger.LogError($"客户端调用异常：{e.Message},接口地址：{serverName},调用堆栈{e.StackTrace.ToString()}");
            }
            return result;
        }
        internal HttpRequestMessage BuildMessage(string url, object data)
        {
            url = $"http://127.0.0.1{url}";
            var request = new HttpRequestMessage(HttpMethod.Post, url) { Version = new Version(1, 1) };
            var bytedata = serialize.Serializes(data);
            request.Content = new ByteArrayContent(bytedata);
            request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/x-msgpack");
            request.Content.Headers.ContentLength = bytedata.Length;
            return request;
        }

        internal T ReceiveMessage<T>(byte[] data)
        {
            return serialize.Deserializes<T>(data);
        }
    }
}
