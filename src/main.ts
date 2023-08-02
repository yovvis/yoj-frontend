import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
// ES6import会提前,router.js中现在没法使用VueX
createApp(App).use(store).use(router).use(ArcoVue).mount("#app");
