import CreateTag from "@/components/CreateTag"
import { mapActions, mapGetters } from "vuex"
import TagCard from '../../components/TagCard.vue'

export default{
    name:'TagPage',
    components:{
        CreateTag,
        TagCard
    },
    mounted(){
        this.loader=true;
            this.FETCH_TAGS({
                success:this.handleSuccessFetchTags,
                fail:this.handleFailFetchTags
            })
    },
    data(){
        return{
            loader:false
        }
    },
    methods:{
        ...mapActions('tagStore',['FETCH_TAGS']),
        handleSuccessFetchTags(res){
            console.log(res);
            this.loader=false;
        },
        handleFailFetchTags(err){
            console.log(err);
            this.loader=false;
        },
         fetchTagsBlog(tagId){
            this.$router.push({path:'/tagPage',query:{tagId:tagId}})
    }
    },
    computed:{
        ...mapGetters('tagStore',['getTags'])
    }
}