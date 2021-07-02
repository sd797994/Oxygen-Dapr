using Oxygen.Mesh.Dapr.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClienActorSample
{
    public record MyActor : ActorStateModel
    {
        public int Index { get; set; }
        public override bool AutoSave { get; set; }
        public override int ReminderSeconds { get => 1; }
    }
}
