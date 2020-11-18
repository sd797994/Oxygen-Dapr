using Autofac;
using Dapr.Actors.Runtime;
using Oxygen.Mesh.Dapr.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Mesh.Dapr
{

    public abstract class BaseActorService<T> where T: ActorStateModel
    {
        public T ActorData { get; set; }
        public abstract Task SaveData(T model, ILifetimeScope scope);
    }
}
