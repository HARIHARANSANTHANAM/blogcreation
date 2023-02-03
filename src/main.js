import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
 import store from './store'
 import router from './router';
import VueRouter from 'vue-router';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueTimeago from 'vue-timeago'  
Vue.use(VueToast);
Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})

Vue.config.productionTip = false
Vue.use(VueToast);
let instance = Vue.$toast.open('You did it!');
instance.dismiss();
Vue.$toast.clear();

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)
Vue.filter("truncate", function (word,wordCount) {
  return word.length > wordCount
  ? word.substring(0, wordCount) + "..."
  : word
});


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
