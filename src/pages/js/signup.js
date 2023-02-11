import { mapActions, mapGetters } from 'vuex';
import Usermixins from '@/mixins/Usermixins';
import TagMixins from '@/mixins/TagMixins';
import SelectTags from '@/components/SelectTags.vue'

export default{
    name:'SignUpComponent',
    components:{
        SelectTags
    },
    data(){
        return{
            user:{
                username:'',
                password:'',
                email:'',
                jobPosition:'',
            },
            repeatPassword:'',
            selectedTags: [],
            tags: [],
        }
    },
    mounted(){
        this.fetchTags({
            success:(res)=>{
                this.tags=res;
        },
        fail:(err)=>{
            console.log(err)
        }
    })

    },
    mixins:[Usermixins,TagMixins],
    computed:{
            ...mapGetters('tagStore',['getTags']),
            isPasswordMatch() {
                return this.user.password === this.user.repeatPassword
              },
              errors() {
                let errors = {}
                if (this.user.password.length < 8) {
                  errors.password = 'Password must be at least 8 characters'
                } else if (!/\d/.test(this.user.password)) {
                  errors.password = 'Password must contain a number'
                }
                return errors
              }
    },
    methods:{
        ...mapActions('tagStore',['FETCH_TAGS']),
        addUser(){
            if (Object.keys(this.errors).length) {
                return
              }
                console.log(this.$data);
                const {username,password,email,jobPosition}=this.$data.user;
                let TagValue=this.selectedTags;
                const user={userName:username,password:password,email:email,jobPosition,tagId:TagValue};
                console.log(user)
               this.signUp(user)
        },
        inputSelectTags(value)
        {
            let data=value.map(value=>{return {'tagid':value.value,'tagname':value.text}});
            this.selectedTags=data;
        }
    }
}