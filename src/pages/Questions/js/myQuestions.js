import BlogMixins from "@/mixins/BlogMixins"
import { mapGetters } from "vuex"
import BlogCard from "@/components/BlogCard"
import CreateQuestions from '@/components/CreateQuestions';

export default{
    name:'MyQuestionsPage',
    data(){
        return{
            blogs:this.getBlogs,
            loader:false,
            updateblog:{}
        }
    },
    components:{
        BlogCard,
        CreateQuestions
    },
    computed:{
        ...mapGetters('authStore',['getUser']),
        ...mapGetters('blogStore',['getBlogs'])
    },
    mixins:[BlogMixins],
    mounted(){
        this.loader=true
        this.fetchBlogsByUserId({
            success:(res)=>{this.blogs=this.getBlogs;console.log(res);this.loader=false},
            fail:(err)=>{console.log(err);this.loader=false},
            data:this.getUser?.userid
        })
    },
    methods:{
        fetchThisBlog(blogid){
            this.$router.push({path:'/blog',query:{blogId:blogid}})
    },
    editBlog(blog)
    {
        this.updateblog=blog;
        this.$bvModal.show('updateQuestion');
    }
    }
}