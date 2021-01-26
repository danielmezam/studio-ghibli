import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Filters
import { stringFilter } from "@/filters";
Vue.filter("stringFilter", stringFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
