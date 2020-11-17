<template>
  <div>
    <van-nav-bar left-arrow @click-left="goindex()" title="我的购物车" />
    <ul style="padding-bottom: 50px;">
      <li v-for="item in goods" :key="item.id">
        <van-cell>
          <template slot="icon">
            <van-checkbox v-model="item.choose" @change="changeCart()" />
            <van-image style="margin-left:10px;margin-right:10px" width="100" height="100" :src="item.imageCode" />
          </template>
          <template slot="title">
            <span class="custom-title">{{item.name}}</span>
          </template>
          <template slot="label">
            <span class="custom-title">￥{{item.price}}</span>
          </template>
          <template slot="default">
            <van-stepper @change="changeCart()" v-model="item.count" />
          </template>
        </van-cell>
      </li>
    </ul>
    <van-submit-bar :price="checkedGoods.totalPrice" :disabled="!checkedGoods.canSubmit" button-text="结算"
      @submit="onSubmit">
      <van-checkbox v-model="checkedGoods.allcheck" @click="chooseALL()">全选</van-checkbox>
      <van-button round size="small" style="margin-left:10px" @click="clearAll()" type="info">删除所选</van-button>
    </van-submit-bar>
  </div>
</template>

<script>
  import global from "../common";
  import {
    Checkbox,
    CheckboxGroup,
    Card,
    SubmitBar,
    Toast,
    Stepper,
    Cell,
    Image,
    NavBar,
    Button
  } from "vant";

  export default {
    components: {
      [Card.name]: Card,
      [Checkbox.name]: Checkbox,
      [SubmitBar.name]: SubmitBar,
      [CheckboxGroup.name]: CheckboxGroup,
      [Stepper.name]: Stepper,
      [Cell.name]: Cell,
      [Image.name]: Image,
      [NavBar.name]: NavBar,
      [Button.name]: Button
    },

    data() {
      return {
        checkedGoods: {
          allcheck: false,
          totalPrice: 0.0,
          canSubmit: false
        },
        goods: []
      };
    },
    methods: {
      formatPrice(price) {
        return (price / 100).toFixed(2);
      },
      onSubmit() {
        //创建订单
        var GoodsList = [];
        this.goods.forEach(x => {
          if (x.choose) GoodsList.push({ GoodsId: x.id, StockNumber: x.count, imageId: x.imageId });
        });
        var clearAll = this.clearAll;
        var router = this.$router;
        global.ajaxPost(
          "/api/OrderService/OrderCreate/Excute",
          { GoodsList: GoodsList },
          function () {
            clearAll();
            Toast({
              message: "订单创建成功", duration: 1500, onClose: function () {
                router.push({ name: "orderlist", params: { type: 1 } })
              }
            });
          }
        );
      },
      goindex() {
        this.$router.push("/index");
      },
      chooseALL() {
        this.checkedGoods.allcheck = !this.checkedGoods.allcheck;
        if (this.checkedGoods.allcheck) {
          this.goods.forEach(x => (x.choose = true));
        } else {
          this.goods.forEach(x => (x.choose = false));
        }
      },
      changeCart() {
        global.ResetShopCart(this.goods);
        this.checkCartState();
      },
      clearAll() {
        global.ClearShopCart(
          this.goods.filter(function (item) {
            return item.choose == false;
          })
        );
        this.goods = global.GetShopCart();
        this.checkCartState();
      },
      checkCartState() {
        var everyResult = this.goods.filter(function (item) {
          return item.choose == true;
        });
        if (everyResult.length > 0) {
          var sum = 0.0;
          everyResult.forEach(x => {
            sum += x.count * x.price;
          });
          if (sum > 0) {
            this.checkedGoods.totalPrice = sum * 100;
          } else {
            this.checkedGoods.totalPrice = 0.0;
          }
          this.checkedGoods.canSubmit = true;
        } else {
          this.checkedGoods.totalPrice = 0.0;
          this.checkedGoods.canSubmit = false;
        }
      }
    },
    mounted() {
      this.goods = global.GetShopCart();
      this.checkCartState();
    }
  };
</script>

<style lang="less">
  .card-goods {
    padding: 10px 0;
    background-color: #fff;

    &__item {
      position: relative;
      background-color: #fafafa;

      .van-checkbox__label {
        width: 100%;
        height: auto; // temp
        padding: 0 10px 0 15px;
        box-sizing: border-box;
      }

      .van-checkbox__icon {
        top: 50%;
        left: 10px;
        z-index: 1;
        position: absolute;
        margin-top: -10px;
      }

      .van-card__price {
        color: #f44;
      }
    }
  }
</style>