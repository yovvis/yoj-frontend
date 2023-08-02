<template>
  <a-layout style="min-height: 100vh" id="basiclayout">
    <a-layout-header class="header">
      <GlobalHeader />
    </a-layout-header>
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="footer">
      <a href="https://github.com/yovvis" target="_blank">Yoj By Yovvis</a>
      <span style="margin-left: 2px">@all rights reserved </span>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style>
#basiclayout .header {
  margin-bottom: 15px;
  box-shadow: #eee 1px 1px 5px;
}

#basiclayout .content {
  background: linear-gradient(to right, #eee, #fff);
  margin-bottom: 15px;
  padding: 18px;
}

#basiclayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
