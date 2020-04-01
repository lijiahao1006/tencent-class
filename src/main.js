import "styles/main.css";
import 'view-design/dist/styles/iview.css';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from 'view-design';

Vue.use(ViewUI);

Vue.config.productionTip = false;

const v = new Vue({
  router,
  store,
  render(h) {
    return h(App)
  }
}).$mount("#app");
Vue.mixin({
  created() {
    console.log('11')
  }
})