import Vue from 'vue'
import App from './App.vue'
import VeeValidate from "vee-validate";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors",
});
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({ el: "#app", render: (h) => h(App) });