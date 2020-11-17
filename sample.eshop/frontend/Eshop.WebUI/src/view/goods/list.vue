<template>
  <div>
    <van-nav-bar title="商城首页">
      <van-icon name="shopping-cart-o" slot="right" size="20" :info="cart.count" @click="gocart()" />
    </van-nav-bar>
    <ul style="padding-bottom: 50px;">
      <li v-for="item in goodslist" :key="item.id">
        <van-card :num="item.stock" :price="item.price" :title="item.name" :thumb="item.imageCode">
          <div slot="footer">
            <van-button
              v-on:click="addCart({ id: item.id, name: item.name,price:item.price, count: 1,imageId:item.imageId, imageCode:item.imageCode, choose:false })"
              size="mini">
              加入购物车</van-button>
          </div>
        </van-card>
      </li>
    </ul>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" is-link to="index">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :info="cart.count" is-link to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" is-link to="user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  import { Card, Button, NavBar, Toast, Tabbar, TabbarItem, Icon } from "vant";
  import global from "../common";
  export default {
    components: {
      [Card.name]: Card,
      [Button.name]: Button,
      [NavBar.name]: NavBar,
      [Toast.name]: Toast,
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
      [Icon.name]: Icon
    },
    data: function () {
      return {
        active: 0,
        cart: { count: "0" },
        goodslist: []
      };
    },
    methods: {
      getgoodslist() {
        this.goodslist = [];
        var goodslist = this.goodslist;
        var getimage = this.getimage;
        var reqDto = {
          Name: "",
          OrderParms: [
		  {OrderName:"Name",IsAsc:true},
		  {OrderName:"IsUpshelf",IsAsc:true}
		  ],
          PageIndex: 1,
          PageSize: 1000,
          IsUpshelf: true
        };
        global.ajaxPost("/api/goodsservice/getgoodslist/query", reqDto, function (
          result
        ) {
          result.data.data.forEach(x => {
            goodslist.push({
              id: x.id,
              name: x.name,
              price: x.price,
              stock: x.stock,
              state: x.isUpshelf,
              stateName: x.isUpshelf == true ? "上架" : "下架",
              operateName: x.isUpshelf == true ? "下架" : "上架",
              imageId: x.imageId,
              imageCode: ""
            });
          });
          goodslist.forEach(x => {
            getimage(x);
          });
        });
      },
      addCart(item) {
        global.AddShopCart(item);
        this.cart.count = global.GetShopCart().length >= 100 ? "99+" : global.GetShopCart().length;
      },
      gocart() {
        this.$router.push("/cart");
      },
      getimage(item) {
        var imageitem = item;
        global.GetImageById(item.imageId, function (data) {
          imageitem.imageCode = data;
        });
      }
    },
    mounted() {
      this.getgoodslist();
      this.cart.count = global.GetShopCart().length >= 100 ? "99+" : global.GetShopCart().length;
    }
  };
</script>