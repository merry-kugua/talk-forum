import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import index from '../views/Login/index'
import release from "@/views/Lssue/release";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      fullScreen: false,
    }
  },
  {
    path:'/login',
    name:'Index',
    component: index,
    meta: {
      fullScreen: true,
    }
  },
  {
    path:'/release',
    name:'Release',
    component: release,
    meta: {
      fullScreen: true,
    }
  },
];

const router = new VueRouter({
  routes,
});

export default router;
