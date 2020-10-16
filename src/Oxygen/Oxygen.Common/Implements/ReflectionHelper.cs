using Microsoft.Extensions.DependencyModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.Loader;
using System.Text;

namespace Oxygen.Common.Implements
{
    public static class ReflectionHelper
    {
        static Lazy<IEnumerable<Assembly>> Assemblies = new Lazy<IEnumerable<Assembly>>(() => DependencyContext.Default.CompileLibraries.Where(lib => !lib.Serviceable && lib.Type != "package").Select(lib => AssemblyLoadContext.Default.LoadFromAssemblyName(new AssemblyName(lib.Name))));
        public static IEnumerable<Type> GetTypesByAttributes(bool isInterface, params Type[] attributes)
        {
            return Assemblies.Value.SelectMany(a => a.GetTypes().Where(t => (isInterface ? t.IsInterface : !t.IsInterface) && t.GetCustomAttributes().Select(x => x.GetType()).Intersect(attributes).Count() == attributes.Count())).ToArray();
        }
        public static T GetAttributeProperyiesByType<T>(Type type) where T : Attribute
        {
            return type.GetCustomAttributes().FirstOrDefault(x=>x is T) as T;
        }
        public static Type GetTypeByInterface(Type interfaceType)
        {
            return Assemblies.Value.SelectMany(a => a.GetTypes().Where(t => t.GetInterfaces().Any() && t.GetInterfaces().Contains(interfaceType))).FirstOrDefault();
        }
        public static IEnumerable<MethodInfo> GetMethodByFilter(Type type, params Type[] attributes)
        {
            return type.GetMethods().Where(x => x.GetCustomAttributes().Select(x => x.GetType()).Intersect(attributes).Count() == attributes.Count());
        }

        public static Assembly GetAssemblyByInterface<T>()
        {
            return Assemblies.Value.Where(a => a.GetTypes().Any(t => t.GetInterfaces().Any() && t.GetInterfaces().Contains(typeof(T)))).FirstOrDefault();
        }
    }
}
