import BlogMixins from "@/mixins/BlogMixins"
import { mapGetters } from "vuex"
import BlogCard from "@/components/BlogCard"

export default{
    name:'MyQuestionsPage',
    data(){
        return{
            blogs:this.getBlogs
        }
    },
    components:{
        BlogCard
    },
    computed:{
        ...mapGetters('authStore',['getUser']),
        ...mapGetters('blogStore',['getBlogs'])
    },
    mixins:[BlogMixins],
    mounted(){
        this.fetchBlogsByUserId({
            success:(res)=>{this.blogs=this.getBlogs;console.log(res)},
            fail:(err)=>console.log(err),
            data:this.getUser?.userid
        })
    },
    methods:{
        fetchThisBlog(blogid){
            this.$router.push({path:'/blog',query:{blogId:blogid}})
    }
    }
}