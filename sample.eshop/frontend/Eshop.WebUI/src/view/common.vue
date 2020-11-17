<script>
  import axios from "axios";
  import { Notify, Toast } from "vant";
  function ajaxPost(url, data, callback) {
    var hosturl = "http://api.oxygen-eshopsample.com";
    axios
      .post(hosturl + url, data, {
        headers: {
          Token: sessionStorage.getItem("token"),
          canaryver: process.env.VUE_APP_CANARYVER
        }
      })
      .then(function (message) {
        var result = message.data;
        if (result.code == 0) {
          callback(result);
        } else {
          Notify({
            type: "danger", duration: 2000, message: result.errMessage
          });
        }
      })
      .catch(function (error) {
        Notify({ type: "danger", message: "系统异常,请稍后再试!" });
        window.console.log(error);
      });
  }
  function loginOut(router) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userInfo");
    Toast({
      message: "退出登录成功",
      duration: 1000,
      onClose: function () {
        router.push("/login");
      }
    });
  }
  function back() {
    history.back(-1);
  }
  function GetUserInfo(callback) {
    var userstr = sessionStorage.getItem("userInfo");
    if (userstr == null || userstr == undefined) {
      callback({});
    }
    else {
      var user = JSON.parse(userstr);
      ajaxPost(
        "/api/tradeservice/getmyaccountbalance/query",
        {},
        function (result) {
          user.Balance = result.data.balance;
          user.BalanceRecord = result.data.records;
          callback(user);
        }
      );
    }
  }
  function GetShopCart() {
    var cartlist = sessionStorage.getItem("cart");
    if (cartlist == null || cartlist == undefined || cartlist.length == 0) {
      return [];
    }
    else {
      return JSON.parse(cartlist);
    }
  }
  function ClearShopCart(list) {
    sessionStorage.setItem("cart", JSON.stringify(list));
  }
  function ResetShopCart(list) {
    sessionStorage.setItem("cart", JSON.stringify(list));
  }
  function AddShopCart(item) {
    var cartlist = sessionStorage.getItem("cart");
    if (cartlist == null || cartlist == undefined) {
      cartlist = [];
    }
    else {
      cartlist = JSON.parse(cartlist);
    }
    var add = true;
    cartlist.forEach(x => {
      if (x.id == item.id) {
        add = false;
        x.count += 1;
        if (x.choose)
          x.choose = true;
        else
          x.choose = item.choose;
      }
    });
    if (add)
      cartlist.push(item);
    sessionStorage.setItem(
      "cart",
      JSON.stringify(cartlist)
    );
  }
  function GetImageById(id, callback) {
    ajaxPost("/api/GoodsService/GetGoodsImage/Query",
      { Id: id },
      function (result) {
        callback(result.data);
      }
    );
  }
  export default {
    ajaxPost,
    back,
    GetUserInfo,
    loginOut,
    AddShopCart,
    GetShopCart,
    ClearShopCart,
    ResetShopCart,
    GetImageById,
    methods: {
      getdfRouter() {
        return this.$router;
      }
    }
  };
</script>