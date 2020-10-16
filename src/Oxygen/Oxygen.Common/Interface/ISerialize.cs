using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Common.Interface
{
    /// <summary>
    /// 序列化接口
    /// </summary>
    public interface ISerialize
    {
        /// <summary>
        /// 序列化
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="input"></param>
        /// <returns></returns>
        byte[] Serializes<T>(T input);

        /// <summary>
        /// 序列化T为JSON字符串
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="input"></param>
        /// <returns></returns>
        string SerializesJson<T>(T input);
        /// <summary>
        /// 序列化json字符串为Byte[]
        /// </summary>
        /// <param name="jsonStr"></param>
        /// <returns></returns>
        byte[] SerializesJsonString(string jsonStr);

        /// <summary>
        /// 反序列化
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="input"></param>
        /// <returns></returns>
        T Deserializes<T>(byte[] input);

        /// <summary>
        /// 反序列化JSON字符串为T
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="input"></param>
        /// <returns></returns>
        T DeserializesJson<T>(string input);
        /// <summary>
        /// 反序列化JSON字符串为object
        /// </summary>
        /// <param name="type"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        object DeserializesJson(Type type, string input);

        /// <summary>
        /// 序列化
        /// </summary>
        /// <param name="type"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        byte[] Serializes(Type type, object input);
        /// <summary>
        /// 反序列化
        /// </summary>
        /// <param name="type"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        object Deserializes(Type type, byte[] input);
    }
}
