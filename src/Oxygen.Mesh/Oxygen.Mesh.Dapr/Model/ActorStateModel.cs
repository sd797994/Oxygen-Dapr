using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Oxygen.Mesh.Dapr.Model
{
    public abstract class ActorStateModel
    {
        public abstract bool AutoSave { get; set; }
        public abstract int ReminderSeconds { get; }
        public bool IsDelete { get; set; }
        public void DeleteModel()
        {
            AutoSave = true;
            IsDelete = true;
        }
        private int oldVersion;
        private int newVersion;
        internal void UpdateVersion()
        {
            Interlocked.Increment(ref newVersion);
        }
        internal bool CheckVersionChange(bool updateversion = true)
        {
            if (oldVersion != newVersion)
            {
                if (updateversion)
                    oldVersion = newVersion;
                return true;
            }
            return false;
        }
    }
}
