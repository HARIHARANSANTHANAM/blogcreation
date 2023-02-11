import { mapActions, mapGetters } from "vuex";
import Vue from 'vue';

export default{
    computed:{
        ...mapGetters('authStore',['getUser'])
    },
    methods:{
        ...mapActions('authStore',['AUTH_SIGNUP']),
        signUp(user){
            this.AUTH_SIGNUP({
                data:user,
                success:this.onSuccessFetchEmp,
                fail:this.onFailFetchEmp
            })
        },
        isAuthorized(userId){
            return (this.getUser?.userid && this.isadmin()) || (this.getUser?.userid && this.getUser?.userid===userId)
        },
        isadmin(){
           return this.getUser?.admin;
        },
        onSuccessFetchEmp(res){
            console.log(res);
            Vue.$toast.success('Profile saved.', {
                position: 'top',
                duration:3000
            })
            this.$router.push({path:'/'})
        },
        onFailFetchEmp(err){
            console.log(err)
            Vue.$toast.error('Please Try again Later.', {
                position: 'top',
                duration:3000
            })
        },
        getAuthUser(){
            return this.getUser;
        }
    }
}