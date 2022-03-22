<template>
  <div>
    <div>
<!--      账号-->
      <input type="text" v-model="z_h">
<!--      密码-->
      <input type="text" v-model="m_a">
      <div @click="aaa">登录</div>
    </div>
  </div>
</template>

<script>
import { loginWeb } from "@/api/adminApi";
export default {
  name: "index",
  data(){
    return{
      z_h:null,
      m_a:null
    }
  },
  methods:{
    aaa() {
      loginWeb().then(res => {
        console.log(res);
      })
    }
  }
};
</script>

<style scoped>

</style>
