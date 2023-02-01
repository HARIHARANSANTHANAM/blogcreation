import {mapActions} from 'vuex'
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
            this.$router.push({path:'/home'})
        },
        handlefailLogin(err)
        {
            this.login=false;
            console.log(err);
        }
    }
}