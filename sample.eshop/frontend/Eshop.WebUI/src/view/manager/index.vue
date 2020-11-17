<template>
  <div>
    <van-nav-bar title="商品管理" left-text="退出登录" left-arrow @click-left="loginOut()" right-text="新增"
      @click-right="editGoods()" />
    <ul>
      <li v-for="item in goodslist" :key="item.id">
        <van-card :num="item.stock" :tag="item.stateName" :price="item.price" :title="item.name"
          :thumb="item.imageCode">
          <div slot="footer">
            <van-button v-on:click="changeGoodsState(item.id, item.state)" size="mini">{{item.operateName}}</van-button>
            <van-button v-on:click="editGoods(item)" size="mini">编辑</van-button>
            <van-button type="danger" v-on:click="deleteGoods(item.id)" size="mini">删除</van-button>
          </div>
        </van-card>
      </li>
    </ul>
  </div>
</template>
<script>
  import { Checkbox, CheckboxGroup, Card, Button, NavBar, Toast, Dialog } from "vant";
  import global from "../common";
  export default {
    components: {
      [Card.name]: Card,
      [Checkbox.name]: Checkbox,
      [CheckboxGroup.name]: CheckboxGroup,
      [Button.name]: Button,
      [NavBar.name]: NavBar,
      [Toast.name]: Toast,
      [Dialog.name]: Dialog
    },
    data: function () {
      return {
        goodslist: [],
        chooseGoods: { id: "", name: "", price: "", stock: "" }
      };
    },
    methods: {
      getgoodslist() {
        this.goodslist = [];
        var goodslist = this.goodslist;
        var getimage = this.getimage;
        var reqDto = {
          Name: "",
          OrderParms: [],
          PageIndex: 1,
          PageSize: 1000,
          IsUpshelf: null
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
      changeGoodsState(id, state) {
        var getgoodslist = this.getgoodslist;
        global.ajaxPost(
          "/api/goodsservice/upordownshelf/excute",
          {
            Id: id,
            IsUpShelf: !state
          },
          function () {
            Toast("商品编辑成功");
            getgoodslist();
          }
        );
      },
      editGoods(item) {
        this.$router.push({ name: "managerdetail", params: { item: item } });
      },
      loginOut() {
        global.loginOut(this.$router);
      },
      deleteGoods(id) {
        var getgoodslist = this.getgoodslist;
        Dialog.confirm({
          message: '确认删除商品吗?商品删除后不可恢复!'
        }).then(() => {
          global.ajaxPost(
            "/api/goodsservice/deletegoods/excute",
            {
              Id: id
            },
            function () {
              Toast("商品删除成功");
              getgoodslist();
            }
          );
        }).catch(() => {

        });
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
    }
  };
</script>