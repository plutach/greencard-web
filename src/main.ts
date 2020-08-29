import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDznsKjnThAw5P3VcYshvW8hp1F2Xxa6pU",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

//  google map api : AIzaSyDznsKjnThAw5P3VcYshvW8hp1F2Xxa6pU
