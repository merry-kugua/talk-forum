<template>
  <div class="talk-header-content d-flex">
    <div class="flex-sm-grow-1"></div>
    <ul class="align-items-center">
      <li class="talk-nav-list" v-for="(item, index) in talkNavList" :key="item.title">
        <router-link :to="{ name: item.routerLink }">
            <a
              :class="item.routerLink === $route.name ? 'active-block' : ''"
              @click="activeLine(index)"
            >
              {{ item.title }}
            </a>
          </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data (){
    return {
      talkNavList: [
        {title: "首页", routerLink: "Home"},
        // {title: "类别", routerLink: ""},
        // {title: "归档", routerLink: ""},
        // {title: "友链", routerLink: ""},
        {title: "关于Teams", routerLink: ""},
        {title: "登陆", routerLink: ""},
      ],
      activeIndex: ""
    }
  },
  methods: {
    activeLine(index) {
      activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.talk-header-content {
  height: 60px;
  background: rgba(61, 159, 242, .8);
  & .talk-nav-list a {
    margin: 0 10px;
    text-decoration: none;
    outline: none;
    color: #fff;
    opacity: .5;
    font-size: 22px;
    &:hover {
      opacity: 1;
    }
  }
  .active-block {
    text-decoration: underline !important;
    text-underline-offset: 6px;
  }
}
</style>
