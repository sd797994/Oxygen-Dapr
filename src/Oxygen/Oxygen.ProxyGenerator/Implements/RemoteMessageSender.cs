using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Common.Implements;
using Oxygen.Common.Interface;
using Oxygen.ProxyGenerator.Interface;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.ProxyGenerator.Implements
{
    internal class RemoteMessageSender: IRemoteMessageSender
    {
        private readonly ISerialize serialize;
        private readonly ILogger logger;
        static HttpClient HttpClient;
        public RemoteMessageSender(IHttpClientFactory httpClientFactory, ISerialize serialize, ILogger logger)
        {
            this.serialize = serialize;
            this.logger = logger;
            HttpClient = HttpClient ?? httpClientFactory.CreateClient();
            HttpClient.DefaultRequestHeaders.Connection.Add("keep-alive");
        }
        public async Task<T> SendMessage<T>(string hostName, string serverName, object input) where T : class, new()
        {
            T result = default;
            try
            {
                var sendMessage = BuildMessage(hostName, serverName, input);
                var responseMessage = await HttpClient.SendAsync(sendMessage);
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
        internal HttpRequestMessage BuildMessage(string host, string url, object data)
        {
            //本地联调集群地址：api.oxygen-dapr.com:31889
            //集群内地址：localhost:3500
            HttpRequestMessage request;
            if (data is IEvent)
            {
                url = $"http://localhost:3500/v1.0/publish/{host}/{url}";
                request = new HttpRequestMessage(HttpMethod.Post, url) { Version = new Version(1, 1) };
                var bytedata = serialize.SerializesJson(data);
                request.Content = new StringContent(bytedata);
            }
            else
            {
                url = $"http://localhost:3500/v1.0/invoke/{host}/method{url}";
                request = new HttpRequestMessage(HttpMethod.Post, url) { Version = new Version(1, 1) };
                var bytedata = serialize.Serializes(data);
                request.Content = new ByteArrayContent(bytedata);
                request.Content.Headers.ContentType = new MediaTypeHeaderValue($"application/x-msgpack");
                return request;
            }
            return request;
        }

        internal T ReceiveMessage<T>(byte[] data) where T :class, new()
        {
            return serialize.Deserializes<T>(data) ?? new T();
        }
    }
}
