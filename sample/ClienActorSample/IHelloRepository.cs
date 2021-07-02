using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClienActorSample
{
    public interface IHelloRepository
    {
        Task<MyActor> GetData();
        Task SaveData(MyActor actor);
    }
}
