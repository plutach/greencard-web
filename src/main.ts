import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";

import AppComponent from "@app/app.component.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(AppComponent)
}).$mount("#app");
