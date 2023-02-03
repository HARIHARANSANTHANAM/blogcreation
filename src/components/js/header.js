import { mapActions} from "vuex";
import Usermixins from '@/mixins/Usermixins';
import Links from '../../componentConfig/Links'
import SidebarComponent from '../SidebarComponent.vue';
import SearchComponent from '../SearchComponent.vue';
import CreateQuestions from '../CreateQuestions.vue'

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
        alert("Logged Out!!")
        this.AUTH_LOGOUT();
        this.$router.push('/')
    },
    content(value)
    {
        console.log(value)
    }
    }
}