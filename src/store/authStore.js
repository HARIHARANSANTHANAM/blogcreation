import AuthService from '../serviceLayer/authService';


function checkUserInLocalStorage(){
    return localStorage.getItem('user')?localStorage.getItem('user'):{};
}
const authStore={
    state:{
        user:checkUserInLocalStorage(),
    },
    mutations:{
    setLogin(state,user)
    {
        localStorage.setItem('user',JSON.stringify(user));
        state.user=JSON.stringify(user);
    },
    setLogout(state)
    {
      localStorage.removeItem('user');
      state.user={}
    }
    },
    actions:{
        AUTH_LOGIN({commit},{success,fail,data}){
            // const {email,password}=data;
            // let authemp;
                AuthService.authUser({data,
                    success:(res)=>{
                        commit("setLogin",res.data);
                        success(res.data)
                        
                    },
                    fail:(err)=>{
                        fail(err)
                    }})
          },
         AUTH_LOGOUT({commit}){
              commit("setLogout");
          }
    },
    getters:{
        getUser(state){
            return JSON.parse(state.user);
          },
    },
    namespaced:true
}

export default authStore;