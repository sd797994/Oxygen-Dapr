using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PublicInterface.Models
{
    public class CreateGoodsDto
    {
        /// <summary>
        /// 商品名称
        /// </summary>
        [Required(ErrorMessage = "商品名称不能为空")]
        [MaxLength(20, ErrorMessage = "商品名称长度不能超过20位")]
        public string Name { get; set; }
        /// <summary>
        /// 商品价格
        /// </summary>
        [Required(ErrorMessage = "商品价格不能为空")]
        [Range(0, double.MaxValue, ErrorMessage = "商品价格超出范围")]
        public decimal Price { get; set; }
        /// <summary>
        /// 商品图片
        /// </summary>
        [Required(ErrorMessage = "商品图片不能为空")]
        public string ImageId { get; set; }
        /// <summary>
        /// 商品库存
        /// </summary>
        [Required(ErrorMessage = "商品库存不能为空")]
        [Range(0, int.MaxValue, ErrorMessage = "商品库存超出范围")]
        public int Stock { get; set; }
    }
}
