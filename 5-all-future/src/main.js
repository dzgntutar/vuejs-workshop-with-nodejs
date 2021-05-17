import Vue from "vue";
import App from "./App.vue";

import VueResource from "vue-resource";

import { router } from "./router";
import { store } from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.filter("paraformat", (value) => {
  return (
    parseFloat(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
    }) + " TL"
  );
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
