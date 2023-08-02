<template>
  <div id="userlayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img class="logo" src="../assets/yoj-logo.svg" />
          <div>Y - oj</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/yovvis" target="_blank">Yoj By Yovvis</a>
        <span style="margin-left: 2px">@all rights reserved </span>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup></script>

<style>
#userlayout {
  text-align: center;
}

#userlayout .logo {
  width: 88px;
  height: 88px;
}

#userlayout .header {
  margin-top: 18px;
  margin-bottom: 15px;
}

#userlayout .content {
  margin-bottom: 15px;
  padding: 18px;
}

#userlayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
