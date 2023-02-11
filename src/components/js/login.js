import {mapActions} from 'vuex'
import Vue from 'vue'; 
export default{
    name:'LoginComponent',
    data(){
        return{
        email:'',
        password:'',
        login:false
        }
    },
    methods:{
        ...mapActions('authStore',['AUTH_LOGIN']),
        validator(){
            if(this.username=="" || this.password=="")
                return true;
            return false;
        },
        signin(e){
            e.preventDefault();
            this.login=true
            this.AUTH_LOGIN({
                success:this.handlesuccessLogin,
                fail:this.handlefailLogin,
                data:{
                    email:this.email,
                    password:this.password
                }
            })
        },
        handlesuccessLogin(data){
            this.login=false;   
            console.log(data);
            Vue.$toast.success('Logged In Successfully', {
                position: 'top',
                duration:3000
            })
            this.$router.push({path:'/home'})
        },
        handlefailLogin(err)
        {
            this.login=false;
            Vue.$toast.error(err.response.data, {
                position: 'top',
                duration:3000
            })
            console.log(err);
        }
    }
}