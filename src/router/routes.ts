import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ACCESS_ENUM from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
    meta: {
      access: ACCESS_ENUM.NOT_LOGIN,
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
  {
    path: "/user",
    name: "用户",
    component: () =>
      import(/* webpackChunkName: "userlayout" */ "../layouts/UserLayout.vue"),
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: "login",
        name: "登录",
        component: () =>
          import(
            /* webpackChunkName: "userlogin */ "../views/UserLoginView.vue"
          ),
      },
      {
        path: "register",
        name: "注册",
        component: () =>
          import(
            /* webpackChunkName: "userregister" */ "../views/UserRegisterView.vue"
          ),
      },
    ],
  },
];
