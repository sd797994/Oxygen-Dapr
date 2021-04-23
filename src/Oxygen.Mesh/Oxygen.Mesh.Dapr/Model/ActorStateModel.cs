using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Oxygen.Mesh.Dapr.Model
{
    public abstract record ActorStateModel
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
        internal void UpdateVersion(ActorStateModel oldData)
        {
            if (oldData != this) //对比两个record如果没有变化，则忽略不增加版本
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
