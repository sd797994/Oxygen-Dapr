using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace Oxygen.Common.Implements
{
    /// <summary>
    /// 基于表达式树的类型转换扩展
    /// </summary>
    /// <typeparam name="TSource"></typeparam>
    /// <typeparam name="TTarget"></typeparam>
    internal static class Mapper<TSource, TTarget> where TSource : class where TTarget : class
    {
        private static Func<TSource, TTarget> MapFunc { get; set; }

        private static Action<TSource, TTarget> MapAction { get; set; }

        /// <summary>
        /// 将对象TSource转换为TTarget
        /// </summary>
        /// <param name="source"></param>
        /// <returns></returns>
        public static TTarget Map(TSource source)
        {
            if (MapFunc == null)
                MapFunc = GetMapFunc();

            return MapFunc(source);
        }

        public static List<TTarget> MapList(IEnumerable<TSource> sources)
        {
            if (MapFunc == null)
                MapFunc = GetMapFunc();

            return sources.Select(MapFunc).ToList();
        }

        /// <summary>
        /// 将对象TSource的值赋给给TTarget
        /// </summary>
        /// <param name="source"></param>
        /// <param name="target"></param>
        public static void Map(TSource source, TTarget target)
        {
            if (MapAction == null)
                MapAction = GetMapAction();

            MapAction(source, target);
        }

        private static Func<TSource, TTarget> GetMapFunc()
        {
            var sourceType = typeof(TSource);
            var targetType = typeof(TTarget);

            if (IsEnumerable(sourceType) || IsEnumerable(targetType))
                throw new NotSupportedException("Enumerable types are not supported,please use MapList method.");

            //Func委托传入变量
            var parameter = Expression.Parameter(sourceType, "p");

            var memberBindings = new List<MemberBinding>();
            var targetTypes = targetType.GetProperties().Where(x => x.PropertyType.IsPublic && x.CanWrite);
            foreach (var targetItem in targetTypes)
            {
                var sourceItem = sourceType.GetProperty(targetItem.Name);

                //判断实体的读写权限
                if (sourceItem == null || !sourceItem.CanRead || sourceItem.PropertyType.IsNotPublic)
                    continue;

                //标注NotMapped特性的属性忽略转换
                if (sourceItem.GetCustomAttribute<NotMappedAttribute>() != null)
                    continue;

                var sourceProperty = Expression.Property(parameter, sourceItem);

                //当非值类型且类型不相同时
                if (!sourceItem.PropertyType.IsValueType && sourceItem.PropertyType != targetItem.PropertyType)
                {
                    //判断都是(非泛型、非数组)class
                    if (sourceItem.PropertyType.IsClass && targetItem.PropertyType.IsClass
                        && !sourceItem.PropertyType.IsArray && !targetItem.PropertyType.IsArray
                        && !sourceItem.PropertyType.IsGenericType && !targetItem.PropertyType.IsGenericType)
                    {
                        var expression = GetClassExpression(sourceProperty, sourceItem.PropertyType, targetItem.PropertyType);
                        memberBindings.Add(Expression.Bind(targetItem, expression));
                    }

                    //集合数组类型的转换
                    if (typeof(IEnumerable).IsAssignableFrom(sourceItem.PropertyType) && typeof(IEnumerable).IsAssignableFrom(targetItem.PropertyType))
                    {
                        var expression = GetListExpression(sourceProperty, sourceItem.PropertyType, targetItem.PropertyType);
                        memberBindings.Add(Expression.Bind(targetItem, expression));
                    }

                    continue;
                }

                //可空类型转换到非可空类型，当可空类型值为null时，用默认值赋给目标属性；不为null就直接转换
                if (IsNullableType(sourceItem.PropertyType) && !IsNullableType(targetItem.PropertyType))
                {
                    var hasValueExpression = Expression.Equal(Expression.Property(sourceProperty, "HasValue"), Expression.Constant(true));
                    var conditionItem = Expression.Condition(hasValueExpression, Expression.Convert(sourceProperty, targetItem.PropertyType), Expression.Default(targetItem.PropertyType));
                    memberBindings.Add(Expression.Bind(targetItem, conditionItem));
                    continue;
                }

                //非可空类型转换到可空类型，直接转换
                if (!IsNullableType(sourceItem.PropertyType) && IsNullableType(targetItem.PropertyType))
                {
                    var memberExpression = Expression.Convert(sourceProperty, targetItem.PropertyType);
                    memberBindings.Add(Expression.Bind(targetItem, memberExpression));
                    continue;
                }

                if (targetItem.PropertyType != sourceItem.PropertyType)
                    continue;

                memberBindings.Add(Expression.Bind(targetItem, sourceProperty));
            }

            //创建一个if条件表达式
            var test = Expression.NotEqual(parameter, Expression.Constant(null, sourceType));// p==null;
            var ifTrue = Expression.MemberInit(Expression.New(targetType), memberBindings);
            var condition = Expression.Condition(test, ifTrue, Expression.Constant(null, targetType));

            var lambda = Expression.Lambda<Func<TSource, TTarget>>(condition, parameter);
            return lambda.Compile();
        }

        /// <summary>
        /// 类型是clas时赋值
        /// </summary>
        /// <param name="sourceProperty"></param>
        /// <param name="targetProperty"></param>
        /// <param name="sourceType"></param>
        /// <param name="targetType"></param>
        /// <returns></returns>
        private static Expression GetClassExpression(Expression sourceProperty, Type sourceType, Type targetType)
        {
            //条件p.Item!=null
            var testItem = Expression.NotEqual(sourceProperty, Expression.Constant(null, sourceType));

            //构造回调 Mapper<TSource, TTarget>.Map()
            var mapperType = typeof(Mapper<,>).MakeGenericType(sourceType, targetType);
            var iftrue = Expression.Call(mapperType.GetMethod(nameof(Map), new[] { sourceType }), sourceProperty);

            var conditionItem = Expression.Condition(testItem, iftrue, Expression.Constant(null, targetType));

            return conditionItem;
        }

        /// <summary>
        /// 类型为集合时赋值
        /// </summary>
        /// <param name="sourceProperty"></param>
        /// <param name="targetProperty"></param>
        /// <param name="sourceType"></param>
        /// <param name="targetType"></param>
        /// <returns></returns>
        private static Expression GetListExpression(Expression sourceProperty, Type sourceType, Type targetType)
        {
            //条件p.Item!=null
            var testItem = Expression.NotEqual(sourceProperty, Expression.Constant(null, sourceType));

            //构造回调 Mapper<TSource, TTarget>.MapList()
            var sourceArg = sourceType.IsArray ? sourceType.GetElementType() : sourceType.GetGenericArguments()[0];
            var targetArg = targetType.IsArray ? targetType.GetElementType() : targetType.GetGenericArguments()[0];
            var mapperType = typeof(Mapper<,>).MakeGenericType(sourceArg, targetArg);

            var mapperExecMap = Expression.Call(mapperType.GetMethod(nameof(MapList), new[] { sourceType }), sourceProperty);

            Expression iftrue;
            if (targetType == mapperExecMap.Type)
            {
                iftrue = mapperExecMap;
            }
            else if (targetType.IsArray)//数组类型调用ToArray()方法
            {
                iftrue = Expression.Call(typeof(Enumerable), nameof(Enumerable.ToArray), new[] { mapperExecMap.Type.GenericTypeArguments[0] }, mapperExecMap);
            }
            else if (typeof(IDictionary).IsAssignableFrom(targetType))
            {
                iftrue = Expression.Constant(null, targetType);//字典类型不转换
            }
            else
            {
                iftrue = Expression.Convert(mapperExecMap, targetType);
            }

            var conditionItem = Expression.Condition(testItem, iftrue, Expression.Constant(null, targetType));

            return conditionItem;
        }

        private static Action<TSource, TTarget> GetMapAction()
        {
            var sourceType = typeof(TSource);
            var targetType = typeof(TTarget);

            if (IsEnumerable(sourceType) || IsEnumerable(targetType))
                throw new NotSupportedException("Enumerable types are not supported,please use MapList method.");

            //Func委托传入变量
            var sourceParameter = Expression.Parameter(sourceType, "p");

            var targetParameter = Expression.Parameter(targetType, "t");

            //创建一个表达式集合
            var expressions = new List<Expression>();

            var targetTypes = targetType.GetProperties().Where(x => x.PropertyType.IsPublic && x.CanWrite);
            foreach (var targetItem in targetTypes)
            {
                var sourceItem = sourceType.GetProperty(targetItem.Name);

                //判断实体的读写权限
                if (sourceItem == null || !sourceItem.CanRead || sourceItem.PropertyType.IsNotPublic)
                    continue;

                //标注NotMapped特性的属性忽略转换
                if (sourceItem.GetCustomAttribute<NotMappedAttribute>() != null)
                    continue;

                var sourceProperty = Expression.Property(sourceParameter, sourceItem);
                var targetProperty = Expression.Property(targetParameter, targetItem);

                //当非值类型且类型不相同时
                if (!sourceItem.PropertyType.IsValueType && sourceItem.PropertyType != targetItem.PropertyType)
                {
                    //判断都是(非泛型、非数组)class
                    if (sourceItem.PropertyType.IsClass && targetItem.PropertyType.IsClass
                        && !sourceItem.PropertyType.IsArray && !targetItem.PropertyType.IsArray
                        && !sourceItem.PropertyType.IsGenericType && !targetItem.PropertyType.IsGenericType)
                    {
                        var expression = GetClassExpression(sourceProperty, sourceItem.PropertyType, targetItem.PropertyType);
                        expressions.Add(Expression.Assign(targetProperty, expression));
                    }

                    //集合数组类型的转换
                    if (typeof(IEnumerable).IsAssignableFrom(sourceItem.PropertyType) && typeof(IEnumerable).IsAssignableFrom(targetItem.PropertyType))
                    {
                        var expression = GetListExpression(sourceProperty, sourceItem.PropertyType, targetItem.PropertyType);
                        expressions.Add(Expression.Assign(targetProperty, expression));
                    }

                    continue;
                }

                //可空类型转换到非可空类型，当可空类型值为null时，用默认值赋给目标属性；不为null就直接转换
                if (IsNullableType(sourceItem.PropertyType) && !IsNullableType(targetItem.PropertyType))
                {
                    var hasValueExpression = Expression.Equal(Expression.Property(sourceProperty, "HasValue"), Expression.Constant(true));
                    var conditionItem = Expression.Condition(hasValueExpression, Expression.Convert(sourceProperty, targetItem.PropertyType), Expression.Default(targetItem.PropertyType));
                    expressions.Add(Expression.Assign(targetProperty, conditionItem));
                    continue;
                }

                //非可空类型转换到可空类型，直接转换
                if (!IsNullableType(sourceItem.PropertyType) && IsNullableType(targetItem.PropertyType))
                {
                    var memberExpression = Expression.Convert(sourceProperty, targetItem.PropertyType);
                    expressions.Add(Expression.Assign(targetProperty, memberExpression));
                    continue;
                }

                if (targetItem.PropertyType != sourceItem.PropertyType)
                    continue;

                expressions.Add(Expression.Assign(targetProperty, sourceProperty));
            }

            //当Target!=null判断source是否为空
            var testSource = Expression.NotEqual(sourceParameter, Expression.Constant(null, sourceType));
            var ifTrueSource = Expression.Block(expressions);
            var conditionSource = Expression.IfThen(testSource, ifTrueSource);

            //判断target是否为空
            var testTarget = Expression.NotEqual(targetParameter, Expression.Constant(null, targetType));
            var conditionTarget = Expression.IfThen(testTarget, conditionSource);

            var lambda = Expression.Lambda<Action<TSource, TTarget>>(conditionTarget, sourceParameter, targetParameter);
            return lambda.Compile();
        }

        private static bool IsNullableType(Type type)
        {
            return type.IsGenericType && type.GetGenericTypeDefinition() == typeof(Nullable<>);
        }

        private static bool IsEnumerable(Type type)
        {
            return type.IsArray
                   || type.GetInterfaces().Any(x => x == typeof(ICollection) || x == typeof(IEnumerable));
        }
    }
}
