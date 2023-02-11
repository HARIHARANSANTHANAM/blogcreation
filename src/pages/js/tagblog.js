import { mapActions, mapGetters } from "vuex"
import BlogCard from '../../components/BlogCard.vue'

export default{
    name:'BlogPagebyTag',
    mounted(){
        let tagId=this.$route.query.tagId;
        this.loader=true;
        this.FETCH_BLOG_BY_TAG(
            {
                data:tagId,
                success:this.handleSuccessFetchBlogbyTag,
                fail:this.handleFailFetchBlogbyTag
            }
        )
    },
    components:{
        BlogCard,
    },
    computed:{
        ...mapGetters('blogStore',['getBlogs'])
    },
    data(){
        return {
            loader:false
        }
    },
    methods:{
        ...mapActions('blogStore',['FETCH_BLOG_BY_TAG']),
        handleSuccessFetchBlogbyTag(res){
            console.log(res);
            this.loader=false;
        },
        handleFailFetchBlogbyTag(err){
            console.log(err);
            this.loader=false;
        },
        fetchThisBlog(blogid){
            this.$router.push({path:'/blog',query:{blogId:blogid}})
        }
    }
}