<template>
  <div>
    <van-nav-bar title="账户充值" left-text="返回" left-arrow @click-left="back()" />
    <van-cell-group>
      <van-field v-model="RechargeBalance.money" required clearable type="number" label="充值金额" placeholder="请输入充值金额" />
    </van-cell-group>
    <div style="margin-top: 10%;"></div>
    <van-cell-group>
      <van-cell>
        <van-button type="primary" block @click="userRecharge()">确认充值</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
  import global from "../common";
  import { Button, NavBar, Row, Col, Cell, CellGroup, Field, Toast } from "vant";
  export default {
    components: {
      [Button.name]: Button,
      [NavBar.name]: NavBar,
      [Row.name]: Row,
      [Col.name]: Col,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Field.name]: Field,
      [Toast.name]: Toast
    },
    data: function () {
      return {
        RechargeBalance: { money: 0.0 }
      };
    },
    methods: {
      userRecharge() {
        var rechargeBalance = this.RechargeBalance;
        global.ajaxPost(
          "/api/tradeservice/accountrecharge/excute",
          { RechargeBalance: this.RechargeBalance.money },
          function () {
            rechargeBalance.money = 0.0;
            Toast('充值成功!');
          }
        );
      },
      back() {
        history.back(-1);
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