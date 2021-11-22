import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

import "./plugins/vuesax.js";
import 'daisyui'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false;

new Vue({
  router,
  vSelect,

  render: (h) => h(App),
}).$mount("#app");