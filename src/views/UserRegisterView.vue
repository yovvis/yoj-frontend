<template>
  <div id="userregisterview">
    <h2>用户注册</h2>
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
      <a-form-item
        field="checkPassword"
        tooltip="请输入相同密码"
        label="重复密码"
      >
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请再次输入密码..."
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
import { UserControllerService, UserRegisterRequest } from "../../generated";
import { useRouter, useRoute } from "vue-router";
import message from "@arco-design/web-vue/es/message";

const router = useRouter();
const form = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as UserRegisterRequest);
const handleSubmit = async () => {
  const resp = await UserControllerService.userRegisterUsingPost(form);
  if (resp.code === 0) {
    await router.push({
      path: "/user/login",
      replace: true,
    });
  } else {
    message.error("注册失败，" + resp.message);
  }
};
</script>
<style scoped>
.form-out {
  width: 600px;
  margin: auto;
}
</style>
