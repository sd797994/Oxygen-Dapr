using MediatR;
using Oxygen.Mesh.Dapr.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.Mesh.Dapr
{
    public class ActorStateMessage : INotification
    {
        public string ActorName { get; set; }
        public ActorStateModel ActorData { get; set; }
    }
}
