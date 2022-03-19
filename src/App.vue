<template>
  <div v-if="!$route.meta.fullScreen">
    <header-home />
    <router-view />
  </div>
  <div v-else>
    <router-view />
  </div>
</template>
<script>
import HeaderHome from "./components/HeaderHome.vue";
export default {
  components: {
    HeaderHome,
  },
};
</script>
<style lang="scss"></style>
