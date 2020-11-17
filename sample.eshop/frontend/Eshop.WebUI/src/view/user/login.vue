<template>
  <div>
    <van-nav-bar left-arrow @click-left="goindex()" :title="loginmanager==true?'管理端登录':'用户登录'"
      :right-text="loginmanager==false?'切换到管理端':'切换到用户端'" @click-right="loginchange()" />
    <div style="margin-top: 40%;"></div>
    <van-cell-group justify="center" align="center">
      <van-field v-model="logininfo.Account" required clearable label="用户名" placeholder="请输入用户名" />
      <van-field v-model="logininfo.Password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <div style="margin-top: 10%;"></div>
    <van-cell-group v-if="!loginmanager">
      <van-cell>
        <van-button type="primary" block @click="login('1')">登录</van-button>
      </van-cell>
    </van-cell-group>
    <van-cell-group v-if="loginmanager">
      <van-cell>
        <van-button type="primary" block @click="login('2')">登录管理端</van-button>
      </van-cell>
    </van-cell-group>
    <van-cell-group v-if="!loginmanager">
      <van-cell>
        <van-button type="info" block @click="createuser">注册</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
  import {
    Row,
    Col,
    Icon,
    Cell,
    CellGroup,
    Button,
    Field,
    Toast,
    NavBar
  } from "vant";
  import global from "../common";
  export default {
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [Field.name]: Field,
      [Toast.name]: Toast,
      [NavBar.name]: NavBar
    },
    data: function () {
      return {
        loginmanager: false,
        logininfo: {
          Account: "admin1",
          Password: "string",
          Balance: "0.00",
          BalanceRecord: []
        }
      };
    },
    methods: {
      login(type) {
        var router = this.$router;
        var logininfo = this.logininfo;
        global.ajaxPost(
          "/api/userservice/userlogin/excute",
          this.logininfo,
          function (result) {
            sessionStorage.setItem("token", result.data);
            sessionStorage.setItem(
              "userInfo",
              JSON.stringify({
                Account: logininfo.Account,
                Balance: 0
              })
            );
            if (type == 1) router.push("/user");
            else router.push("/manager");
          }
        );
      },
      loginchange() {
        this.loginmanager = !this.loginmanager;
      },
      createuser() {
        global.ajaxPost(
          "/api/userservice/useraccountcreate/excute",
          this.logininfo,
          function () {
            Toast("用户创建成功,请登录");
          }
        );
      },
      goindex() {
        this.$router.push('/index');
      }
    },
    mounted() {
      this.$PageTitle = "登录";
      this.loginmanager = false;
    }
  };
</script>