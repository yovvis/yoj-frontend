<template>
  <div id="userloginview">
    <h2>用户登录</h2>
    <a-form class="form-out" :model="form" @submit="handleSubmit">
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号..." />
      </a-form-item>
      <a-form-item field="userPassword" tooltip="密码不少于5位" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码..."
        />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../generated";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import message from "@arco-design/web-vue/es/message";

const router = useRouter();
const store = useStore();
const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);
const handleSubmit = async () => {
  const resp = await UserControllerService.userLoginUsingPost(form);
  if (resp.code === 0) {
    await store.dispatch("/user/getLoginUser", resp.data);
    await router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登录失败，" + resp.message);
  }
};
</script>
<style scoped>
.form-out {
  width: 600px;
  margin: auto;
}
</style>
