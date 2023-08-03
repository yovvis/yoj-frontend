import HomeView from "@/views/HomeView.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import { RouteRecordRaw } from "vue-router";

const menuRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
    meta: {
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/about",
    name: "关于我的",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/admin",
    name: "管理员可见",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/AdminView.vue"),
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/noauth",
    name: "无权限",
    meta: {
      hideInMenu: true,
    },
    component: () =>
      import(/* webpackChunkName: "noauth" */ "../views/NoAuthView.vue"),
  },
  {
    path: "/hide",
    name: "隐藏",
    meta: {
      hideInMenu: true,
    },
    component: () =>
      import(/* webpackChunkName: "hide" */ "../views/HideView.vue"),
  },
];
export default menuRoutes;
