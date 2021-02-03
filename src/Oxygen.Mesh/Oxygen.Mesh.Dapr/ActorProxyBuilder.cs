using Autofac;
using Dapr.Actors;
using Dapr.Actors.Runtime;
using Oxygen.Client.ServerSymbol.Actors;
using Oxygen.Mesh.Dapr.Model;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Reflection.Emit;
using System.Runtime.CompilerServices;
using System.Runtime.Loader;
using System.Threading.Tasks;

namespace Oxygen.Mesh.Dapr
{
    internal class ActorProxyBuilder
    {
        public static (Type interfaceType, Type proxyType, Func<ActorStateModel, ILifetimeScope, Task> SaveDataFunc) GetType(Type interfaceServiceType, Type implType, MethodInfo[] methods)
        {

            var asmName = new AssemblyName("Oxygen.Mesh.Dapr.DynamicActor");
            var asmBuilder = AssemblyBuilder.DefineDynamicAssembly(asmName, AssemblyBuilderAccess.RunAndCollect);
            var mdlBldr = asmBuilder.DefineDynamicModule("Main");
            var ItypeBldr = mdlBldr.DefineType($"{interfaceServiceType.Name}ActorInterface", TypeAttributes.Interface | TypeAttributes.Public | TypeAttributes.Abstract, null);
            ItypeBldr.AddInterfaceImplementation(typeof(IActor));
            foreach (var method in methods)
            {
                var methodBldr = ItypeBldr.DefineMethod(method.Name, MethodAttributes.PrivateScope | MethodAttributes.Public | MethodAttributes.Virtual | MethodAttributes.HideBySig | MethodAttributes.VtableLayoutMask | MethodAttributes.Abstract, method.ReturnType, method.GetParameters().Select(x => x.ParameterType).ToArray());
                var paramIndex = 0;
                foreach (var param in method.GetParameters())
                {
                    if (param.ParameterType.BaseType != typeof(ActorSendDto))
                        throw new Exception($"Actor服务参数必须继承{nameof(ActorSendDto)}");
                    paramIndex++;
                    methodBldr.DefineParameter(paramIndex, ParameterAttributes.None, param.Name);
                }
            }
            var interfaceType = ItypeBldr.CreateType();
            var baseAcotModelType = implType.BaseType.GetProperty("ActorData").PropertyType;
            var baseType = typeof(BasicActor<>).MakeGenericType(baseAcotModelType);
            var typeBldr = mdlBldr.DefineType($"{interfaceServiceType.Name}ActorImpl", TypeAttributes.Class | TypeAttributes.Public, baseType);
            typeBldr.AddInterfaceImplementation(interfaceType);
            var fieldImpl = typeBldr.DefineField("scope", typeof(ILifetimeScope), FieldAttributes.Private);
            var objCtor = baseType.GetConstructors()[0];
            var args = objCtor.GetParameters().Select(x => x.ParameterType).ToArray();
            var constructorBuilder = typeBldr.DefineConstructor(MethodAttributes.Public, CallingConventions.HasThis, args);
            ILGenerator ilOfCtor = constructorBuilder.GetILGenerator();
            ilOfCtor.Emit(OpCodes.Ldarg_0);
            for (var i = 0; i < args.Length; i++)
            {
                ilOfCtor.Emit(OpCodes.Ldarg, i + 1);
            }
            ilOfCtor.Emit(OpCodes.Call, objCtor);
            ilOfCtor.Emit(OpCodes.Ldarg_0);
            ilOfCtor.Emit(OpCodes.Ldarg, args.Length);
            ilOfCtor.Emit(OpCodes.Stfld, fieldImpl);
            ilOfCtor.Emit(OpCodes.Ret);
            foreach (var method in methods)
            {
                var createexpressionmethod = typeof(DynamicMethodBuilder).GetMethod("CreateMethodDelegate",new Type[] { typeof(Type), typeof(string) }).MakeGenericMethod(interfaceServiceType, method.GetParameters().FirstOrDefault().ParameterType, method.ReturnType);
                var inferfacemethod = interfaceType.GetMethod(method.Name);
                var methodBldr = typeBldr.DefineMethod(method.Name, MethodAttributes.PrivateScope | MethodAttributes.Public | MethodAttributes.Final | MethodAttributes.Virtual | MethodAttributes.HideBySig | MethodAttributes.VtableLayoutMask, method.ReturnType, method.GetParameters().Select(x => x.ParameterType).ToArray());
                var paramIndex = 0;
                foreach (var param in method.GetParameters())
                {
                    paramIndex++;
                    methodBldr.DefineParameter(paramIndex, ParameterAttributes.None, param.Name);
                }
                var il = methodBldr.GetILGenerator();
                var buildType = typeof(AsyncTaskMethodBuilder<>).MakeGenericType(method.ReturnType.GetGenericArguments()[0]);
                il.DeclareLocal(typeof(ILifetimeScope));
                il.DeclareLocal(interfaceServiceType);
                var funcType = typeof(Func<,,>).MakeGenericType(interfaceServiceType, method.GetParameters().FirstOrDefault().ParameterType, method.ReturnType); 
                il.DeclareLocal(funcType);
                var machineType = typeof(ActorAsyncStateMachine<,,,>).MakeGenericType(interfaceServiceType, method.GetParameters().FirstOrDefault().ParameterType, method.ReturnType.GetGenericArguments()[0], baseAcotModelType);
                il.DeclareLocal(machineType);
                il.DeclareLocal(method.ReturnType);
                il.Emit(OpCodes.Nop);
                il.Emit(OpCodes.Ldtoken, interfaceServiceType);
                il.Emit(OpCodes.Ldstr, method.Name);
                il.Emit(OpCodes.Call, createexpressionmethod);
                il.Emit(OpCodes.Castclass, funcType);
                il.Emit(OpCodes.Stloc_2);
                il.Emit(OpCodes.Ldarg_0);
                il.Emit(OpCodes.Ldarg_0);
                il.Emit(OpCodes.Ldfld, fieldImpl);
                il.Emit(OpCodes.Ldloc_2);
                il.Emit(OpCodes.Ldarg_1);
                il.Emit(OpCodes.Newobj, machineType.GetConstructors()[0]);
                il.Emit(OpCodes.Stloc_3);
                il.Emit(OpCodes.Ldloc_3);
                il.Emit(OpCodes.Ldflda, machineType.GetField("builder"));
                il.Emit(OpCodes.Ldloca_S, 3);
                il.Emit(OpCodes.Call, buildType.GetMethod("Start").MakeGenericMethod(machineType));
                il.Emit(OpCodes.Nop);
                il.Emit(OpCodes.Ldloc_3);
                il.Emit(OpCodes.Ldflda, machineType.GetField("builder"));
                il.Emit(OpCodes.Call, buildType.GetMethod("get_Task"));
                il.Emit(OpCodes.Ret);
                typeBldr.DefineMethodOverride(methodBldr, inferfacemethod);
            }
            var saveDataArgs = new Type[] { typeof(ActorStateModel), typeof(ILifetimeScope) };
            var saveData = new DynamicMethod("SaveData", typeof(Task), saveDataArgs);
            var ilsave = saveData.GetILGenerator();
            ilsave.DeclareLocal(typeof(Task));
            ilsave.Emit(OpCodes.Nop);
            ilsave.Emit(OpCodes.Ldarg_1);
            ilsave.Emit(OpCodes.Call, typeof(ResolutionExtensions).GetMethod("Resolve", new Type[] { typeof(IComponentContext) }).MakeGenericMethod(interfaceServiceType));
            ilsave.Emit(OpCodes.Ldarg_0);
            ilsave.Emit(OpCodes.Ldarg_1);
            ilsave.Emit(OpCodes.Call, implType.GetMethod("SaveData"));
            ilsave.Emit(OpCodes.Ret);
            Func<ActorStateModel, ILifetimeScope, Task> saveDataFunc = (Func<ActorStateModel, ILifetimeScope, Task>)saveData.CreateDelegate(typeof(Func<ActorStateModel, ILifetimeScope, Task>));
            return (interfaceType, typeBldr.CreateType(), saveDataFunc);
        }
    }
    public static class DynamicMethodBuilder
    {
        public static Func<TObj, Tin, Tout> CreateMethodDelegate<TObj, Tin, Tout>(Type type, string methodName)
        {
            MethodInfo method = type.GetMethod(methodName);
            var mParameter = Expression.Parameter(typeof(TObj), "m");
            var pParameter = Expression.Parameter(typeof(Tin), "p");
            var mcExpression = Expression.Call(mParameter, method, Expression.Convert(pParameter, typeof(Tin)));
            var reExpression = Expression.Convert(mcExpression, typeof(Tout));
            var result = Expression.Lambda<Func<TObj, Tin, Tout>>(reExpression, mParameter, pParameter).Compile();
            return result;
        }
    }
}

