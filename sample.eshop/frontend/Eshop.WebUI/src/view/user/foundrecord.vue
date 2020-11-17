<template>
  <div>
    <van-nav-bar
      title="资金记录"
      left-text="返回"
      left-arrow
      @click-left="back()"
      right-text="账户充值"
      @click-right="GotoRecharge()"
    />
    <ul>
      <li v-for="item in fundrecord" :key="item.id">
        <van-cell :title="item.content" :value="item.time" />
      </li>
    </ul>
  </div>
</template>
<script>
import { NavBar, Cell } from "vant";
import global from "../common";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell
  },
  data: function() {
    return {
      fundrecord: []
    };
  },
  methods: {
    back() {
      history.back(-1);
    },
    GotoRecharge() {
      this.$router.push("Recharge");
    }
  },
  mounted() {
    var foundrecord = this.fundrecord;
    global.GetUserInfo(function(data) {
      var index = 0;
      data.BalanceRecord.forEach(x => {
        x.id = index;
        index++;
        foundrecord.push(x);
      });
    });
  }
};
</script>