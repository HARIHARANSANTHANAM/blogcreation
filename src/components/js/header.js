import { mapActions} from "vuex";
import Usermixins from '@/mixins/Usermixins';
import Links from '../../componentConfig/Links'
import SidebarComponent from '../SidebarComponent.vue';
import SearchComponent from '../SearchComponent.vue'

export default{
    name:'NavbarComponent',
    components:{
        SidebarComponent,
        SearchComponent
    },
    data(){
        return{
            links:Links
        }
    },
    mixins:[Usermixins],
    methods:{
        ...mapActions('authStore',['AUTH_LOGOUT']),
    logout(){
        alert("Logged Out!!")
        this.AUTH_LOGOUT();
        this.$router.push('/')
    }
    }
}