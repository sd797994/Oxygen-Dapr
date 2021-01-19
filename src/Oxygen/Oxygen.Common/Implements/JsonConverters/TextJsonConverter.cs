using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Oxygen.Common.Implements.JsonConverters
{
    public class TextJsonConverter
    {
        public abstract class DefParse<T> : JsonConverter<T>
        {
            Func<string, T> ParseFunc;
            public DefParse(Func<string, T> parseFunc)
            {
                ParseFunc = parseFunc;
            }
            public override T Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                try
                {
                    return ParseFunc(reader.GetString());
                }
                catch (Exception)
                {
                    return default(T);
                }
            }
            public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
            {
                writer.WriteStringValue(value.ToString());
            }
        }
        public class DateTimeParse : DefParse<DateTime>
        {
            public DateTimeParse() : base(DateTime.Parse) { }
            public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
            {
                writer.WriteStringValue(value.ToString("yyyy-MM-dd HH:mm:ss"));
            }
        }
        public class IntParse : DefParse<int>
        {
            public IntParse() : base(int.Parse) { }
        }
        public class DoubleParse : DefParse<double>
        {
            public DoubleParse() : base(double.Parse) { }
        }
        public class FloatParse : DefParse<float>
        {
            public FloatParse() : base(float.Parse) { }
        }
        public class GuidParse : DefParse<Guid>
        {
            public GuidParse() : base(Guid.Parse) { }
        }
    }

}
