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
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
router.beforeEach((to, from, next) => {
  // 全局路由守卫鉴权
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.role != "admin") {
      next("/noauth");
      return;
    }
  }
  next();
});
// 测试premitter
</script>
