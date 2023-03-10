import Vue from 'vue';
import Vuex from 'vuex';
import authStore from './authStore';
import tagStore from './tagStore';
import blogStore from './blogStore';
Vue.use(Vuex)



const store=new Vuex.Store({
    modules:{
        authStore,
        blogStore,
        tagStore
    }
});

export default store;