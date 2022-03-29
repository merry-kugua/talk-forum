<template>
  <div>
    <v-md-editor v-model="text" height="400px" @save="change"></v-md-editor>
  </div>
</template>

<script>
export default {
  name: "release",
  data(){
    return {
      text:''
    }
  },
  methods:{
    change(text, html){
      console.log(text, html)
    }
  }
};
</script>

<style scoped>

</style>
