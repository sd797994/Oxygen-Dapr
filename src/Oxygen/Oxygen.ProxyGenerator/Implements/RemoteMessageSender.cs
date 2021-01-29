using Oxygen.Client.ServerSymbol;
using Oxygen.Client.ServerSymbol.Actors;
using Oxygen.Client.ServerSymbol.Events;
using Oxygen.Common;
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
        static Lazy<HttpClient> HttpClient = new Lazy<HttpClient>(() =>
        {
            var client = new HttpClient();
            client.DefaultRequestHeaders.Connection.Add("keep-alive");
            return client;
        });
        public RemoteMessageSender(ISerialize serialize, ILogger logger)
        {
            this.serialize = serialize;
            this.logger = logger;
        }
        public async Task<T> SendMessage<T>(string hostName, string serverName, object input, SendType sendType) where T : new()
        {
            T result = default;
            try
            {
                var sendMessage = BuildMessage(hostName, serverName, input, sendType);
                var responseMessage = await HttpClient.Value.SendAsync(sendMessage);
                if (responseMessage.IsSuccessStatusCode)
                {
                    if (sendType == SendType.publish || sendType == SendType.setState || sendType == SendType.delState)
                        return new T();//事件和状态操作只要返回200代表发送成功
                    return ReceiveMessage<T>(sendType, await responseMessage.Content.ReadAsByteArrayAsync());
                }
                else
                {
                    logger.LogError($"客户端调用http请求异常,状态码：{responseMessage?.StatusCode},请求内容:{sendMessage}，回调内容:{await responseMessage.Content.ReadAsStringAsync()}");
                }
            }
            catch (Exception e)
            {
                logger.LogError($"客户端调用异常：{e.Message},接口地址：{serverName},调用堆栈{e.StackTrace}");
            }
            return result;
        }
        internal HttpRequestMessage BuildMessage(string host, string url, object data, SendType sendType)
        {
            //集群内地址：localhost:3500
            //todo: 由于event和actor会被dapr拦截使用Text.Json进行序列化封装，导致无法使用messagepack序列/反序列化,所以暂时只能采用json
            var basepath = $"http://localhost:3500/";
            //basepath = "http://api.oxygen-dapr.com:30882/";
            HttpRequestMessage request;
            switch (sendType)
            {
                case SendType.invoke:
                    url = $"{basepath}v1.0/invoke/{host}/method{url}";
                    request = new HttpRequestMessage(HttpMethod.Post, url) { Version = new Version(1, 1) };
                    if (data != null)
                    {
                        var bytedata = serialize.Serializes(data);
                        request.Content = new ByteArrayContent(bytedata);
                        request.Content.Headers.ContentType = new MediaTypeHeaderValue($"application/x-msgpack");
                    }
                    else
                    {
                        request.Content = new ByteArrayContent(new byte[0]);
                        request.Content.Headers.ContentType = new MediaTypeHeaderValue($"application/x-msgpack");
                    }
                    AddTraceHeader(request);
                    return request;
                case SendType.publish:
                    url = $"{basepath}v1.0/publish/{host}{url}";
                    request = new HttpRequestMessage(HttpMethod.Post, url) { Version = new Version(1, 1) };
                    var stringjson = serialize.SerializesJson(data);
                    request.Content = new StringContent(stringjson);
                    return request;
                case SendType.actors:
                    url = $"{basepath}v1.0/actors/{host}/{((ActorSendDto)data).ActorId}/method{url}";
                    request = new HttpRequestMessage(HttpMethod.Post, url) { Version = new Version(1, 1) };
                    stringjson = serialize.SerializesJson(data, true);//actor json原样发送
                    request.Content = new StringContent(stringjson);
                    AddTraceHeader(request);
                    return request;
                case SendType.setState:
                    url = $"{basepath}v1.0/state/{host}";
                    request = new HttpRequestMessage(HttpMethod.Post, url) { Version = new Version(1, 1) };
                    stringjson = serialize.SerializesJson(data);
                    request.Content = new StringContent(stringjson);
                    return request;
                case SendType.getState:
                    url = $"{basepath}v1.0/state/{host}{url}";
                    request = new HttpRequestMessage(HttpMethod.Get, url) { Version = new Version(1, 1) };
                    return request;
                case SendType.delState:
                    url = $"{basepath}v1.0/state/{host}{url}";
                    request = new HttpRequestMessage(HttpMethod.Delete, url) { Version = new Version(1, 1) };
                    return request;
            }
            return default;
        }

        internal T ReceiveMessage<T>(SendType sendType, byte[] data) where T : new()
        {
            if (sendType == SendType.invoke)
                return serialize.Deserializes<T>(data) ?? new T();
            else
                return serialize.DeserializesJson<T>(Encoding.UTF8.GetString(data));
        }
        internal void AddTraceHeader(HttpRequestMessage httpRequest)
        {
            if (!string.IsNullOrEmpty(DaprConfig.GetCurrent().TracingHeaders))
            {
                foreach(var headername in DaprConfig.GetCurrent().TracingHeaders.Split(","))
                {
                    foreach(var currentHeader in HttpContextExtension.ContextWapper.Value.Headers)
                    {
                        if (currentHeader.Key == headername)
                            httpRequest.Headers.Add(headername, currentHeader.Value);
                    }
                }
            }
        }
    }
}
