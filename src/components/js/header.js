import { mapActions} from "vuex";
import Usermixins from '@/mixins/Usermixins';
import Links from '../../componentConfig/Links'
import SidebarComponent from '../SidebarComponent.vue';
import SearchComponent from '../SearchComponent.vue';
import CreateQuestions from '../CreateQuestions.vue'
import Vue from 'vue';

export default{
    name:'NavbarComponent',
    components:{
        SidebarComponent,
        SearchComponent,
        CreateQuestions
    },
    data(){
        return{
            links:Links,
            showQuestionModal:false
        }
    },
    mixins:[Usermixins],
    methods:{
        ...mapActions('authStore',['AUTH_LOGOUT']),
    logout(){
       
        this.AUTH_LOGOUT();
        Vue.$toast.error("Logged Out", {
            position: 'top',
            duration:3000
        })
        this.$router.push('/')
    },
    content(value)
    {
        console.log(value)
    }
    }
}