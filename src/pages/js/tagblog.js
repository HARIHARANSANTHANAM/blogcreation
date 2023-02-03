import { mapActions, mapGetters } from "vuex"
import BlogCard from '../../components/BlogCard.vue'

export default{
    name:'BlogPagebyTag',
    mounted(){
        let tagId=this.$route.query.tagId;
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
    methods:{
        ...mapActions('blogStore',['FETCH_BLOG_BY_TAG']),
        handleSuccessFetchBlogbyTag(res){
            console.log(res);
        },
        handleFailFetchBlogbyTag(err){
            console.log(err);
        },
        fetchThisBlog(blogid){
            this.$router.push({path:'/blog',query:{blogId:blogid}})
        }
    }
}