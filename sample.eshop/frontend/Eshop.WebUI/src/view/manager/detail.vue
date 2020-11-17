<template>
  <div>
    <van-nav-bar :title="chooseGoods.id!=''?'编辑商品':'新增商品'" left-text="返回" left-arrow @click-left="back()" />
    <van-cell-group>
      <van-field v-model="chooseGoods.name" required clearable type="text" label="商品名" placeholder="请输入商品名" />
      <van-field v-model="chooseGoods.price" required clearable type="number" label="价格" placeholder="请输入价格" />
      <van-field v-model="chooseGoods.stock" required clearable type="number" label="库存" placeholder="请输入库存" />
      <van-cell>
        <template slot="title">
          <van-uploader v-model="chooseGoods.image" :max-count="1" :after-read="afterRead" />
        </template>
      </van-cell>

    </van-cell-group>
    <div style="margin-top: 10%;"></div>
    <van-cell-group v-if="chooseGoods.id==''">
      <van-cell>
        <van-button type="primary" block @click="addGoods()">新增商品信息</van-button>
      </van-cell>
    </van-cell-group>
    <van-cell-group v-if="chooseGoods.id!=''">
      <van-cell>
        <van-button type="primary" block @click="changeGoodsInfo()">修改基本信息</van-button>
      </van-cell>
    </van-cell-group>
    <van-cell-group v-if="chooseGoods.id!=''">
      <van-cell>
        <van-button type="primary" block @click="changeGoodsStock()">修改库存信息</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
  import global from "../common";
  import { Button, NavBar, Row, Col, Cell, CellGroup, Field, Toast, Uploader } from "vant";
  export default {
    components: {
      [Button.name]: Button,
      [NavBar.name]: NavBar,
      [Row.name]: Row,
      [Col.name]: Col,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Field.name]: Field,
      [Toast.name]: Toast,
      [Uploader.name]: Uploader
    },
    data: function () {
      return {
        chooseGoods: { id: "", name: "", price: "", stock: "", image: [], imageid: "" }
      };
    },
    methods: {
      addGoods() {
        var chooseGoods = this.chooseGoods;
        global.ajaxPost(
          "/api/goodsservice/creategoods/excute",
          {
            Stock: this.chooseGoods.stock,
            Name: this.chooseGoods.name,
            Price: this.chooseGoods.price,
            ImageId: this.chooseGoods.imageid
          },
          function () {
            Toast("商品新增成功");
            chooseGoods.stock = 0;
            chooseGoods.price = 0;
            chooseGoods.name = '';
          }
        );
      },
      changeGoodsInfo() {
        global.ajaxPost(
          "/api/goodsservice/updategoodsbaseinfo/excute",
          {
            Id: this.chooseGoods.id,
            Name: this.chooseGoods.name,
            Price: this.chooseGoods.price
          },
          function () {
            Toast("商品编辑成功");
          }
        );
      },
      changeGoodsStock() {
        global.ajaxPost(
          "/api/goodsservice/increasegoods/excute",
          {
            Id: this.chooseGoods.id,
            Stock: this.chooseGoods.stock
          },
          function () {
            Toast("商品编辑成功");
          }
        );
      },
      back() {
        history.back(-1);
      },
      afterRead(file) {
        this.chooseGoods.image = [];
        this.chooseGoods.image.push({ url: file.content, isImage: true });
        var chooseGoods = this.chooseGoods;
        global.ajaxPost(
          "/api/GoodsService/SaveGoodsImage/Excute",
          {
            Base64Code: file.content
          },
          function (result) {
            chooseGoods.imageid = result.data;
          }
        );
      }
    },
    mounted() {
      if (this.$route.params.item != undefined) {
        this.chooseGoods.id = this.$route.params.item.id;
        this.chooseGoods.name = this.$route.params.item.name;
        this.chooseGoods.price = this.$route.params.item.price;
        this.chooseGoods.stock = this.$route.params.item.stock;
      }
    }
  };
</script>