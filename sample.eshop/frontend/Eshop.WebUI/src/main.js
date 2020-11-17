import Vue from 'vue';
import App from './App';
import { router } from './router';

new Vue({
  router,
  el: '#app',
  data: {
    showlogin: false,
    showusercenter: false,
    showmanager: false,
    showgoodsdetail: false,
    showshoppage: false,
    goodslist: [],
    chooseGoods: { id: "", name: "", price: "", stock: "" },
    RechargeMoney: 0,
    shopcart: [],
    showtradelist: false,
    showorderlist: false,
    orderlist: [],
    orderDetail: false,
    chooseOrder: { id: "", orderNo: "", state: "", orderItems: [], totalPrice: "" }
  },
  render: h => h(App)
});