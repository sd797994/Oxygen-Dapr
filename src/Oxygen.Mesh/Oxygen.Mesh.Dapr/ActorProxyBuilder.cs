using Autofac;
using Dapr.Actors;
using Dapr.Actors.Runtime;
using Oxygen.Client.ServerSymbol.Actors;
using Oxygen.Mesh.Dapr.Model;
using System;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
using System.Runtime.CompilerServices;
using System.Runtime.Loader;
using System.Threading.Tasks;

namespace Oxygen.Mesh.Dapr
{
    internal class ActorProxyBuilder
    {
        public static (Type interfaceType, Type proxyType) GetType(Type interfaceServiceType, Type implType, MethodInfo[] methods)
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
            var fieldImpl = typeBldr.DefineField("scope", interfaceServiceType, FieldAttributes.Private);
            var objCtor = baseType.GetConstructors()[0];
            var _args = objCtor.GetParameters().Select(x => x.ParameterType).ToList();
            _args.Add(interfaceServiceType);
            var args = _args.ToArray();
            var constructorBuilder = typeBldr.DefineConstructor(MethodAttributes.Public, CallingConventions.HasThis, args);
            ILGenerator ilOfCtor = constructorBuilder.GetILGenerator();
            ilOfCtor.Emit(OpCodes.Ldarg_0);
            for (var i = 0; i < args.Length - 1; i++)
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
                var inferfacemethod = interfaceType.GetMethod(method.Name);
                var methodBldr = typeBldr.DefineMethod(method.Name, MethodAttributes.PrivateScope | MethodAttributes.Public | MethodAttributes.Final | MethodAttributes.Virtual | MethodAttributes.HideBySig | MethodAttributes.VtableLayoutMask, method.ReturnType, method.GetParameters().Select(x => x.ParameterType).ToArray());
                var paramIndex = 0;
                foreach (var param in method.GetParameters())
                {
                    paramIndex++;
                    methodBldr.DefineParameter(paramIndex, ParameterAttributes.None, param.Name);
                }
                var il = methodBldr.GetILGenerator();
                var funcType = typeof(Func<,>).MakeGenericType(method.GetParameters().FirstOrDefault().ParameterType, method.ReturnType);
                var machineType = typeof(ActorAsyncStateMachine<,,,>).MakeGenericType(implType, method.GetParameters().FirstOrDefault().ParameterType, method.ReturnType.GetGenericArguments()[0], baseAcotModelType);
                var returnType = method.ReturnType;
                var buildType = typeof(AsyncTaskMethodBuilder<>).MakeGenericType(method.ReturnType.GetGenericArguments()[0]);
                var local0 = il.DeclareLocal(funcType);
                var local1 = il.DeclareLocal(machineType);
                il.Emit(OpCodes.Nop);
                il.Emit(OpCodes.Ldtoken, interfaceServiceType);
                il.Emit(OpCodes.Call, typeof(Type).GetMethod("GetTypeFromHandle", new Type[] { typeof(RuntimeTypeHandle) }));
                il.Emit(OpCodes.Ldstr, method.Name);
                il.Emit(OpCodes.Call, typeof(Type).GetMethods().FirstOrDefault(x => x.Name.Equals("GetMethod")));
                il.Emit(OpCodes.Ldtoken, funcType);
                il.Emit(OpCodes.Call, typeof(Type).GetMethod("GetTypeFromHandle", new Type[] { typeof(RuntimeTypeHandle) }));
                il.Emit(OpCodes.Ldarg_0);
                il.Emit(OpCodes.Ldfld, fieldImpl);
                il.Emit(OpCodes.Callvirt, typeof(MethodInfo).GetMethod("CreateDelegate", new Type[] { typeof(Type), typeof(object) }));
                il.Emit(OpCodes.Castclass, funcType);
                il.Emit(OpCodes.Stloc, local0);
                il.Emit(OpCodes.Ldarg_0);
                il.Emit(OpCodes.Ldarg_0);
                il.Emit(OpCodes.Ldfld, fieldImpl);
                il.Emit(OpCodes.Ldloc, local0);
                il.Emit(OpCodes.Ldarg_1);
                il.Emit(OpCodes.Newobj, machineType.GetConstructors()[0]);
                il.Emit(OpCodes.Stloc, local1);
                il.Emit(OpCodes.Ldloc, local1);
                il.Emit(OpCodes.Ldflda, machineType.GetField("builder"));
                il.Emit(OpCodes.Ldloca_S, local1);
                il.Emit(OpCodes.Call, buildType.GetMethod("Start").MakeGenericMethod(machineType));
                il.Emit(OpCodes.Nop);
                il.Emit(OpCodes.Ldloc, local1);
                il.Emit(OpCodes.Ldflda, machineType.GetField("builder"));
                il.Emit(OpCodes.Call, buildType.GetMethod("get_Task"));
                il.Emit(OpCodes.Ret);
                typeBldr.DefineMethodOverride(methodBldr, inferfacemethod);
            }
            return (interfaceType, typeBldr.CreateType());
        }
    }
}

