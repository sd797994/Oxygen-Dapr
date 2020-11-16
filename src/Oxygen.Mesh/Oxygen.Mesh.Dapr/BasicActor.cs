using Dapr.Actors;
using Dapr.Actors.Runtime;
using Oxygen.Mesh.Dapr.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Oxygen.Mesh.Dapr
{

    public class BasicActor<T> : Actor where T : ActorStateModel
    {
        public T ActorData { get; set; }
        private string actorId;
        public BasicActor(ActorService actorService, ActorId actorId) : base(actorService, actorId) { this.actorId = actorId.GetId(); }
        protected override async Task OnPreActorMethodAsync(ActorMethodContext actorMethodContext)
        {
            if (ActorData == null)
            {
                var result = await StateManager.TryGetStateAsync<T>("ActorData");
                if (result.HasValue)
                    ActorData = result.Value;
            }
            await Task.CompletedTask;
        }
        protected override async Task OnPostActorMethodAsync(ActorMethodContext actorMethodContext)
        {
            if (ActorData != null && ActorData.AutoSave)
            {
                if (ActorData.IsDelete)
                {
                    if (await StateManager.TryRemoveStateAsync("ActorData"))
                        ActorData = null;
                }
                else
                    await StateManager.SetStateAsync("ActorData", ActorData);
            }
            await Task.CompletedTask;
        }
    }
}
