import Vue from "vue";
import router from "./router";
import store from "./store";
import { CreateElement, VNode } from "vue/types/umd";

import AppComponent from "@/app/app.component.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (renderer: CreateElement): VNode => renderer(AppComponent)
}).$mount("#app");
