import CreateTag from "@/components/CreateTag"
import { mapActions, mapGetters } from "vuex"
import BlogCard from '../../components/BlogCard.vue'

export default{
    name:'TagPage',
    components:{
        CreateTag,
        BlogCard
    },
    mounted(){
            this.FETCH_TAGS({
                success:this.handleSuccessFetchTags,
                fail:this.handleFailFetchTags
            })
    },
    methods:{
        ...mapActions('tagStore',['FETCH_TAGS']),
        handleSuccessFetchTags(res){
            console.log(res);
        },
        handleFailFetchTags(err){
            console.log(err);
        },
         fetchTagsBlog(tagId){
            this.$router.push({path:'/tagPage',query:{tagId:tagId}})
    }
    },
    computed:{
        ...mapGetters('tagStore',['getTags'])
    }
}