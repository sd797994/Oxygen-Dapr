<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
<script>
import { NavBar } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    back() {
      history.back(-1);
    }
  },
  mounted() {}
};
</script>