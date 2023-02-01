<template>
  <div >
  <NavbarComponent v-if="!isSigninorSignup()"/>
  <router-view v-if="isSigninorSignup()"/>
   </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
export default {
  name: 'App',
  components:{
    NavbarComponent
  },
  methods:{
    isSigninorSignup(){
        let path=['/','/signup'];
        console.log(path.includes(this.$route.path))
        return path.includes(this.$route.path);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
.btn-quinbay{
     background:#11AFB6;
    color:white;
}
</style>
