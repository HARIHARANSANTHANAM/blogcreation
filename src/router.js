import LoginComponent from './components/LoginComponent.vue';
import HomePage from './pages/homePage.vue';
import BlogPage from './pages/BlogPage.vue';
import SignUpPage from './pages/SignUpPage.vue';
import TagPage from './pages/TagPage.vue';
import VueRouter from 'vue-router';
import NotFound from './components/NotFound.vue'

const routerconfig=new VueRouter({
    mode:'history',
    routes:[ 
        {
            path:'/',
            name:'LoginComponent',
            component:LoginComponent
        },
        {
            path:'/home',
            name:'HomePage',
            component:HomePage
        },
        {
            path:'/blog',
            name:'BlogPage',
            component:BlogPage
        },
        {
            path:'/Signup',
            name:'SignUp',
            component:SignUpPage
        },
        {
            path:'/Tag',
            name:'TagPage',
            component:TagPage
        },
        {
            path: '*',
            component: NotFound
          }
   ]
})




routerconfig.beforeEach((to, from, next) => {
    // check if user is logged in
    const isLoggedIn = localStorage.getItem('user');  
    
    if(to.matched.some(record => record.meta.public))
    {
      next();
    }
    else if (to.path === '/' && isLoggedIn) {
      next('/home');
    } 
    else if(to.path === '/home' && !isLoggedIn){
        next({ path: '/' });    
    }
    else {
      next();

    }
  });

export default routerconfig;