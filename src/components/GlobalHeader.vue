<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <div class="menu-demo">
        <a-menu
          mode="horizontal"
          :selected-keys="selectKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img class="logo" src="../assets/yoj-logo.svg" />
              <div class="title">Y - OJ</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in visiableRouters" :key="item.path"
            >{{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>
    </a-col>
    <a-col flex="100px">
      <a-space size="large">
        <a-dropdown @select="handleSelect">
          <a-avatar>
            <img :src="store.state.user?.loginUser?.userAvatar" />
          </a-avatar>
          <template #content>
            <a-doption value="center">个人中心</a-doption>
            <a-doption value="logout">退出登录</a-doption>
          </template>
        </a-dropdown>
      </a-space>
      <div></div>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import menuRoutes from "@/router/menuroutes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import { UserControllerService } from "../../generated";
import message from "@arco-design/web-vue/es/message";

const router = useRouter();
const store = useStore();
// console.log("@", store);
// 展示在菜单的路由数组
const visiableRouters = computed(() => {
  return menuRoutes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    // console.log("#", store.state.user.loginUser),这里要根据loginUser的变化而重新解析DOM
    // 根据权限过滤菜单(不匹配的不要)
    if (!checkAccess(store.state.user.loginUser, item.meta?.access as string)) {
      return false;
    }
    return true;
  });
});

// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     userName: "Yovvis",
//     userRole: ACCESS_ENUM.ADMIN,
//   });
// }, 3000);
// 用户下拉
const handleSelect = async (val: string) => {
  console.log(val);
  if (val === "logout") {
    const resp = await UserControllerService.userLogoutUsingPost();
    if (resp.code === 0) {
      await router.push({ path: "/user/login", replace: true });
    } else {
      message.error("退出失败，" + resp.message);
    }
  }
};
// 全局路由守卫,路由跳转后
const selectKeys = ref(["/"]);
router.afterEach((to) => {
  selectKeys.value = [to.path];
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 60px;
}

.title {
  color: #444;
  margin-left: 16px;
}
</style>
