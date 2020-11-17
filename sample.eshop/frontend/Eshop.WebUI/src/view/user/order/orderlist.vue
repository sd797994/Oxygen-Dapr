<template>
  <div>
    <van-nav-bar title="我的订单" left-arrow @click-left="back()" />
    <van-tabs v-model="active" @change="getorder" animated>
      <van-tab title="全部">
        <orderlistTmp v-bind:orderlist="orderlist"></orderlistTmp>
      </van-tab>
      <van-tab title="待付款">
        <orderlistTmp v-bind:orderlist="orderlist"></orderlistTmp>
      </van-tab>
      <van-tab title="已完成">
        <orderlistTmp v-bind:orderlist="orderlist"></orderlistTmp>
      </van-tab>
      <van-tab title="已关闭">
        <orderlistTmp v-bind:orderlist="orderlist"></orderlistTmp>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import {
    Checkbox,
    CheckboxGroup,
    Card,
    Button,
    NavBar,
    Toast,
    Dialog,
    Tab,
    Tabs,
    Panel
  } from "vant";
  import global from "../../common";
  import orderlistTmp from "./Ordertemplate";
  export default {
    components: {
      [Card.name]: Card,
      [Checkbox.name]: Checkbox,
      [CheckboxGroup.name]: CheckboxGroup,
      [Button.name]: Button,
      [NavBar.name]: NavBar,
      [Toast.name]: Toast,
      [Dialog.name]: Dialog,
      [Tabs.name]: Tabs,
      [Tab.name]: Tab,
      [Panel.name]: Panel,
      orderlistTmp
    },
    data: function () {
      return {
        active: 0,
        orderlist: []
      };
    },
    methods: {
      back() {
        this.$router.push("/user");
      },
      getorder() {
        this.orderlist = [];
        var orderlist = this.orderlist;
        global.ajaxPost(
          "/api/orderservice/getorderlistbyuser/query",
          {
            OrderType: this.active,
            OrderParms: [
              { OrderName: "State", IsAsc: true },
              { OrderName: "CreateTime", IsAsc: false }
            ]
          },
          function (result) {
            result.data.forEach(x => {
              var item = {
                createTime: x.createTime,
                id: x.id,
                orderItems: [],
                orderLogs: x.orderLogs,
                orderNo: x.orderNo,
                state: x.state,
                time: x.time,
                totalPrice: x.totalPrice
              };
              x.orderItems.forEach(y => {
                var orderitem = {
                  count: y.count,
                  imageCode: "",
                  imageId: y.imageId,
                  name: y.name,
                  singlePrice: y.singlePrice,
                  totalPrice: y.totalPrice
                }
                item.orderItems.push(orderitem);
              });
              orderlist.push(item);
            });
            orderlist.forEach(x => x.orderItems.forEach(y => {
              global.GetImageById(y.imageId, function (data) {
                y.imageCode = data;
              });

            }));
          }
        );
      }
    },
    mounted() {
      if (this.$route.params.type != null && this.$route.params.type != undefined)
        this.active = this.$route.params.type;
      this.getorder();
    }
  };
</script>