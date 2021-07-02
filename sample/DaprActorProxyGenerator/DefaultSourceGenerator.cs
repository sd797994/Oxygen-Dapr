using ClienActorSample;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Text;
using Oxygen.Mesh.Dapr.ActorProxyGenerator;
using RemoteInterface;
using System.Diagnostics;
using System.Text;

namespace DaprActorProxyGenerator
{
    [Generator]
    public class DefaultSourceGenerator : ISourceGenerator
    {
        public void Execute(GeneratorExecutionContext context)
        {
            var proxylist = ProxyCodeGeneratorTemplate.GetTemplate<IHelloActorService, HelloActorService>();
            foreach (var item in proxylist)
            {
                context.AddSource(item.sourceName, SourceText.From(item.sourceCode, Encoding.UTF8));
            }
        }

        public void Initialize(GeneratorInitializationContext context)
        {
            Debugger.Launch();
        }
    }
}
