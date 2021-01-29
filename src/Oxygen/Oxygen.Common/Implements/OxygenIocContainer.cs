using Autofac;
using Oxygen.Common.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Oxygen.Common.Implements
{
    public class OxygenIocContainer
    {
        private static AsyncLocal<ILifetimeScope> Current = new AsyncLocal<ILifetimeScope>();
        private static ILogger logger;
        public static void BuilderIocContainer(ILifetimeScope container)
        {
            Current.Value = container;
            logger = container.Resolve<ILogger>();
        }
        public static void DisposeIocContainer()
        {
            Current.Value = null;
        }
        public static T Resolve<T>() where T : class
        {
            try
            {
                if (Current.Value == null)
                {
                    logger.LogError("IOC容器实例尚未初始化!");
                    return default;
                }
                else
                {
                    if (Current.Value.TryResolve(out T instance))
                        return instance;
                    else
                    {
                        logger.LogError($"IOC容器实例化失败，没有找到类型{typeof(T).Name}!");
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return null;
            }
        }
        public static T ResolveNamed<T>(string name) where T : class
        {
            try
            {
                if (Current.Value == null)
                {
                    logger.LogError("IOC容器实例尚未初始化!");
                    return default;
                }
                else
                {
                    var instance = Current.Value.ResolveNamed<T>(name);
                    if (instance != null)
                        return instance;
                    else
                    {
                        logger.LogError($"IOC容器实例化失败，没有找到类型{typeof(T).Name}!");
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return null;
            }
        }
        public static object Resolve(Type type)
        {
            try
            {
                if (Current.Value == null)
                {
                    logger.LogError("IOC容器实例化出错!");
                    return null;
                }
                else
                {
                    if (Current.Value.TryResolve(type, out object instance))
                        return instance;
                    else
                    {
                        logger.LogError($"IOC容器实例化失败，没有找到类型{type.Name}!");
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return null;
            }
        }
    }
}
