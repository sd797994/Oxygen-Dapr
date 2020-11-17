<template>
  <div>
    <div style="position: relative;">
      <van-image src="http://img0.imgtn.bdimg.com/it/u=2749356163,3589966479&fm=26&gp=0.jpg"></van-image>
      <van-image style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);" round width="100"
        height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span
        style="position: absolute;top:80%;left: 50%;transform: translate(-50%, -50%);color:#fff;font-size:14px;font-family: @微软雅黑;">
        Hi~
        {{user.Account}}
      </span>
    </div>
    <div style="clear:both"></div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" @click="goorder(0)" />全部订单
      </van-col>
      <van-col span="6">
        <van-icon name="todo-list-o" @click="goorder(1)" />待付款
      </van-col>
      <van-col span="6">
        <van-icon name="passed" @click="goorder(2)" />已完成
      </van-col>
      <van-col span="6">
        <van-icon name="close" @click="goorder(3)" />已关闭
      </van-col>
    </van-row>

    <van-cell-group>
      <van-cell icon="points" title="我的资金" :value="user.Balance" is-link to="foundrecord" />
    </van-cell-group>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" is-link to="index">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :info="cart.count" is-link to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" is-link to="user">个人中心</van-tabbar-item>
    </van-tabbar>
    <van-cell-group>
      <van-cell>
        <van-button type="danger" @click="loginOut" block>退出登录</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
  import global from "../common";
  import {
    Row,
    Col,
    Icon,
    Cell,
    CellGroup,
    Tabbar,
    TabbarItem,
    Image,
    Button,
    Toast
  } from "vant";

  export default {
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
      [Image.name]: Image,
      [Button.name]: Button,
      [Toast.name]: Toast
    },
    data: function () {
      return {
        cart: { count: 0 },
        active: 2,
        user: { Account: "" }
      };
    },
    methods: {
      loginOut() {
        global.loginOut(this.$router);
      },
      goorder(type) {
        this.$router.push({ name: "orderlist", params: { type: type } });
      }
    },
    mounted() {
      var user = this.user;
      var router = this.$router;
      global.GetUserInfo(function (data) {
        user.Account = data.Account;
        user.Balance = data.Balance;
        if (user.Account == null || user.Account == undefined || user.Account.length == 0) {
          router.push('/login');
        }
      });
      this.cart.count = global.GetShopCart().length >= 100 ? "99+" : global.GetShopCart().length;
    }
  };
</script>

<style lang="less">
  .user {
    &-poster {
      width: 100%;
      height: 53vw;
      display: block;
    }

    &-group {
      margin-bottom: 15px;
    }

    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;

      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>