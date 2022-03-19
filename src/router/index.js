import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      fullScreen: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
