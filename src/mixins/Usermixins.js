import { mapGetters } from "vuex";

export default{
    computed:{
        ...mapGetters('authStore',['getUser'])
    },
    methods:{
        signUp(){

        },
        isadmin(){
            console.log(this.getUser);
           return this.getUser?.admin;
        },
        onSuccessFetchEmp(res){
            console.log(res);
        },
        onFailFetchEmp(err){
            console.log(err)
        },
        getAuthUser(){
            return this.getUser;
        }
    }
}