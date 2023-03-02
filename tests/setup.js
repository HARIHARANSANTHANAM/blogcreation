import Vue from 'vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons  } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import VueToast from 'vue-toast-notification';
Vue.use(VueToast);

let instance = Vue.$toast.open('You did it!');
instance.dismiss();
Vue.$toast.clear();

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)