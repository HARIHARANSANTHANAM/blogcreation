import { mapGetters ,mapActions} from 'vuex'
import BlogCard from '../../components/BlogCard.vue'
import CreateQuestions from '@/components/CreateQuestions'

export default{
    name:'HomePage',
    components:{
        BlogCard,
        CreateQuestions
    },
    computed:{
        ...mapGetters('blogStore',['getBlogs'])
    },
    mounted(){
        this.loader=true
            this.FETCH_BLOGS({
                success:this.handleSuccessFetchBlogs,
                fail:this.handleFailFetchBlogs
            })
    },
    data(){
        return{
                loader:false,
                updateblog:{}
        }
    },
    methods:{
        ...mapActions('blogStore',['FETCH_BLOGS']),
        handleSuccessFetchBlogs(res){
            this.loader=false;
                console.log(res)
        },
        handleFailFetchBlogs(err){
            this.loader=false;
            console.log(err)
        },
        fetchThisBlog(blogid){
                this.$router.push({path:'/blog',query:{blogId:blogid}})
        },
        editBlog(blog)
        {
            console.log(blog)
            this.updateblog=blog;
            this.$bvModal.show('updateQuestion');
        }
    }
}