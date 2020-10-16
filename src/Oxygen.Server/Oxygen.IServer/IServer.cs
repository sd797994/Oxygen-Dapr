using System;
using System.Threading.Tasks;

namespace Oxygen.IServer
{
    public interface IServer
    {
        /// <summary>
        /// 启动tcp服务
        /// </summary>
        /// <returns></returns>
        Task OpenServer(Action<object> middlewarebuilder = null, int port = 80);

        /// <summary>
        /// 关闭tcp服务
        /// </summary>
        /// <returns></returns>
        Task CloseServer();
    }
}
