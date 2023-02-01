import { mapActions, mapGetters } from 'vuex'
import VotingComponent from '../../components/VotingComponent.vue'
import BlogCard from '../../components/BlogCard.vue'
import TextEditor from '@/components/TextEditorComponent'

export default{
    name:"Blog",
    components:{
        BlogCard,
        VotingComponent,
        TextEditor
    },
    computed:{
        ...mapGetters('blogStore',['getSelectedBlog'])
    },
    mounted(){
        console.log(this.$route.query);
        let blogId=this.$route.query.blogId;
            this.FETCH_BLOG(
                {
                    data:blogId,
                    success:this.handleSuccessFetchBlog,
                    fail:this.handleFailFetchBlog
                }
            )
    },
    methods:{
                ...mapActions('blogStore',['FETCH_BLOG']),
        handleSuccessFetchBlog(res){
            console.log(res)
        },
        handleFailFetchBlog(err){
            console.log(err)
        },
        fetchContent(content){
                console.log(content)
        }
    }
}