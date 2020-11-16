using Dapr.Actors.Runtime;
using Oxygen.Mesh.Dapr.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Mesh.Dapr
{

    public abstract class BaseActorService<T> where T: ActorStateModel
    {
        public T ActorData { get; set; }
    }
}
