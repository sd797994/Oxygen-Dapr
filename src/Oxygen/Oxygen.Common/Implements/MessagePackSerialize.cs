using MessagePack;
using MessagePack.Resolvers;
using Oxygen.Common.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Oxygen.Common.Implements
{
    public class MessagePackSerialize : ISerialize
    {
        private readonly ILogger _logger;
        public static Lazy<bool> loadConfig = new Lazy<bool>(() => {
            StaticCompositeResolver.Instance.Register(NativeDateTimeResolver.Instance, ContractlessStandardResolverAllowPrivate.Instance);
            var options = MessagePackSerializerOptions.Standard.WithResolver(StaticCompositeResolver.Instance);
            options.WithCompression(MessagePackCompression.Lz4BlockArray);
            MessagePackSerializer.DefaultOptions = options;
            return true;
        });
        public MessagePackSerialize(ILogger logger)
        {
            _ = loadConfig.Value;
            _logger = logger;
        }
        /// <summary>
        /// 序列化
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="input"></param>
        /// <returns></returns>
        public byte[] Serializes<T>(T input)
        {
            if (input == null)
                return default(byte[]);
            try
            {
                return MessagePackSerializer.Serialize(input);
            }
            catch (Exception e)
            {
                _logger.LogError($"序列化对象失败：{e.Message}");
            }
            return default(byte[]);
        }
        /// <summary>
        /// 序列化T为JSON字符串
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="input"></param>
        /// <returns></returns>
        public string SerializesJson<T>(T input)
        {
            if (input == null)
                return default(string);
            try
            {
                return MessagePackSerializer.SerializeToJson(input);
            }
            catch (Exception e)
            {
                _logger.LogError($"序列化对象失败：{e.Message}");
            }
            return default(string);
        }
        /// <summary>
        /// 序列化json字符串为Byte[]
        /// </summary>
        /// <param name="jsonStr"></param>
        /// <returns></returns>
        public byte[] SerializesJsonString(string jsonStr)
        {
            if (jsonStr == null)
                return default(byte[]);
            try
            {
                return MessagePackSerializer.ConvertFromJson(jsonStr);
            }
            catch (Exception e)
            {
                _logger.LogError($"序列化对象失败：{e.Message}");
            }
            return default(byte[]);
        }

        /// <summary>
        /// 反序列化
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="input"></param>
        /// <returns></returns>
        public T Deserializes<T>(byte[] input)
        {
            if (input == null || !input.Any())
                return default(T);
            try
            {
                return MessagePackSerializer.Deserialize<T>(input);
            }
            catch (Exception e)
            {
                _logger.LogError($"反序化对象失败：{e.Message}");
            }
            return default(T);
        }

        /// <summary>
        /// 反序列化JSON字符串为T
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="input"></param>
        /// <returns></returns>
        public T DeserializesJson<T>(string input)
        {
            if (input == null || !input.Any())
                return default(T);
            try
            {
                return MessagePackSerializer.Deserialize<T>(SerializesJsonString(input));
            }
            catch (Exception e)
            {
                _logger.LogError($"反序化对象失败：{e.Message}，消息体：{input}");
            }
            return default(T);
        }
        /// <summary>
        /// 序列化JSON字符串为object
        /// </summary>
        /// <param name="type"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        public object DeserializesJson(Type type, string input)
        {
            if (input == null || !input.Any())
                return default;
            try
            {
                return MessagePackSerializer.Deserialize(type, SerializesJsonString(input));
            }
            catch (Exception e)
            {
                _logger.LogError($"反序化对象失败：{e.Message}，消息体：{input}");
            }
            return default;
        }
        /// <summary>
        /// 序列化
        /// </summary>
        /// <param name="type"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        public byte[] Serializes(Type type, object input)
        {
            if (input == null)
                return default(byte[]);
            try
            {
                return MessagePackSerializer.Serialize(type, input);
            }
            catch (Exception e)
            {
                _logger.LogError($"序列化对象失败：{e.Message}");
            }
            return default(byte[]);
        }

        public object Deserializes(Type type, byte[] input)
        {
            if (input == null || !input.Any())
                return null;
            try
            {
                return MessagePackSerializer.Deserialize(type, input);
            }
            catch (Exception e)
            {
                _logger.LogError($"反序化对象失败：{e.Message}");
            }
            return null;
        }
    }
}
