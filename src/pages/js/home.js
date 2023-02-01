import { mapGetters ,mapActions} from 'vuex'
import BlogCard from '../../components/BlogCard.vue'

export default{
    name:'HomePage',
    components:{
        BlogCard
    },
    computed:{
        ...mapGetters('blogStore',['getBlogs'])
    },
    mounted(){
            this.FETCH_BLOGS({
                success:this.handleSuccessFetchBlogs,
                fail:this.handleFailFetchBlogs
            })
    },
    data(){
        return{

        }
    },
    methods:{
        ...mapActions('blogStore',['FETCH_BLOGS']),
        handleSuccessFetchBlogs(res){
                console.log(res)
        },
        handleFailFetchBlogs(err){
            console.log(err)
        },
        fetchThisBlog(blogid){
                this.$router.push({path:'/blog',query:{blogId:blogid}})
        }
    }
}