using PublicInterface.Base;
using PublicInterface.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PublicInterface
{
    public interface IGoodsService
    {
        Task<BaseApiResult<bool>> Create(CreateGoodsDto input);
        Task<BaseApiResult<bool>> Delete(DeleteGoodsDto input);
        Task<BaseApiResult<bool>> ShelfOperate(ShelfOperateGoodsDto input);
        Task<BaseApiResult<bool>> Increase(IncreaseGoodsDto input);
        Task<BaseApiResult<bool>> UpdateInfo(UpdateGoodsInfoDto input);
        Task<BaseApiResult<bool>> InventoryOperate(InventoryOperateGoodsDto input);
    }
}
