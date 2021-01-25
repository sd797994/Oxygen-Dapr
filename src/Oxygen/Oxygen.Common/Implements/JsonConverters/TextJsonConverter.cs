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
        public class DateTimeParse : JsonConverter<DateTime>
        {
            public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                if (DateTime.TryParse(reader.GetString(), out DateTime result))
                    return result;
                else
                    return default(DateTime);
            }

            public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
            {
                writer.WriteStringValue(value.ToString("yyyy-MM-dd HH:mm:ss"));
            }
        }
        public class IntParse : JsonConverter<int>
        {
            public override int Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                try
                {
                    if (int.TryParse(reader.GetString(), out int result))
                        return result;
                    return default(int);
                }
                catch (Exception)
                {
                    return default(int);
                }
            }

            public override void Write(Utf8JsonWriter writer, int value, JsonSerializerOptions options)
            {
                writer.WriteNumberValue(value);
            }
        }
        public class DecimalParse : JsonConverter<decimal>
        {
            public override decimal Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                try
                {
                    if (reader.TryGetDecimal(out decimal value))
                        return value;
                    return default(decimal);
                }
                catch (Exception)
                {
                    return default(decimal);
                }
            }

            public override void Write(Utf8JsonWriter writer, decimal value, JsonSerializerOptions options)
            {
                writer.WriteNumberValue(value);
            }
        }
        public class DoubleParse : JsonConverter<double>
        {
            public override double Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                try
                {
                    if (reader.TryGetDouble(out double value))
                        return value;
                    else
                        return default(double);
                }
                catch (Exception)
                {
                    return default(double);
                }
            }

            public override void Write(Utf8JsonWriter writer, double value, JsonSerializerOptions options)
            {
                writer.WriteNumberValue(value);
            }
        }
        public class FloatParse : JsonConverter<float>
        {
            public override float Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                try
                {
                    if (reader.TryGetDouble(out double value))
                    return (float)value;
                else
                    return default(float);
                }
                catch (Exception)
                {
                    return default(float);
                }
            }

            public override void Write(Utf8JsonWriter writer, float value, JsonSerializerOptions options)
            {
                writer.WriteNumberValue(value);
            }
        }
        public class GuidParse : JsonConverter<Guid>
        {
            public override Guid Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                try
                {
                    if (reader.TryGetGuid(out Guid value))
                        return value;
                    return Guid.Empty;
                }
                catch (Exception)
                {
                    return Guid.Empty;
                }
            }

            public override void Write(Utf8JsonWriter writer, Guid value, JsonSerializerOptions options)
            {
                writer.WriteStringValue(value);
            }
        }
        public class BoolParse : JsonConverter<bool>
        {
            public override bool Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                try
                {
                    return reader.GetBoolean();
                }
                catch (Exception)
                {
                    return default(bool);
                }
            }

            public override void Write(Utf8JsonWriter writer, bool value, JsonSerializerOptions options)
            {
                writer.WriteBooleanValue(value);
            }
        }
    }

}
