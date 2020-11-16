using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Mesh.Dapr.Model
{
    public abstract partial class ActorStateModel
    {
        public abstract bool AutoSave { get; set; }
        public bool IsDelete { get; set; }
        public void DeleteModel()
        {
            AutoSave = true;
            IsDelete = true;
        }
    }
}
