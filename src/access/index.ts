import store from "@/store";
import router from "@/router";
import AccessEnum from "@/access/accessEnum";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  // 全局路由守卫鉴权
  const loginUser = store.state.user.loginUser;
  // 如果之前从来没登录过
  if (!loginUser || !loginUser.userRole) {
    // 获取当前登陆人
    await store.dispatch("user/getLoginUser");
  }
  const currUser = store.state.user.loginUser;
  console.log("@@@", currUser);
  // 跳转的路由需要的权限
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  // 如果页面需要登录
  if (needAccess !== AccessEnum.NOT_LOGIN) {
    // 用户没有登录（这里的登录必须是你已经登录过，不是自动登录概念，自动登录也是在你登录的基础上进行的）
    if (!currUser || currUser.userRole === ACCESS_ENUM.NOT_LOGIN) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 登录了，但是无权限
    if (!checkAccess(currUser, needAccess)) {
      next("/noauth");
      return;
    }
  }
  next();
});
