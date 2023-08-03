import { RouteRecordRaw } from "vue-router";

const userRoutes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: () =>
      import(/* webpackChunkName: "userlayout" */ "../layouts/UserLayout.vue"),
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
export default userRoutes;
