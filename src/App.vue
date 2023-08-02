<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import AccessEnum from "@/access/accessEnum";

const store = useStore();
router.beforeEach((to, from, next) => {
  // 全局路由守卫鉴权
  if (to.meta?.access === AccessEnum.ADMIN) {
    if (store.state.user.loginUser?.role != AccessEnum.ADMIN) {
      next("/noauth");
      return;
    }
  }
  next();
});
const doInit = () => {
  console.log("欢迎来到Yovvis的项目");
};
onMounted(() => {
  doInit();
});
</script>
