import { mapActions, mapGetters } from 'vuex'
import BlogCard from '../../components/BlogCard.vue'
import Usermixins from '@/mixins/Usermixins'
import AnswerContainer from '@/components/AnswerComponent.vue';
import QAContainer from '@/components/Q&AContainer.vue';
import CommentComponent from '@/components/CommentComponent.vue'
import CommentContainer from '@/components/CommentContainer.vue'
// import comments from '@/Data/comments.js'
import { VueEditor } from "vue2-editor";


export default{
    name:"Blog",
    components:{
        BlogCard,
        AnswerContainer,
        QAContainer,
        CommentComponent,
        CommentContainer,
        VueEditor
    },
    computed:{
        ...mapGetters('blogStore',['getSelectedBlog']),
        ...mapGetters('authStore',['getUser'])
    },
    data(){
        return {
            loader:false,
            content:"",
        }
    },
    mixins:[Usermixins],
    mounted(){
        this.loader=true;
        console.log(this.$route.query);
        let blogId=this.$route.query.blogId;

            this.FETCH_BLOG(
                {
                    data:{blogId:blogId,userId:this.getUser?.userid},
                    success:this.handleSuccessFetchBlog,
                    fail:this.handleFailFetchBlog
                }
            )
    },
    methods:{

                ...mapActions('blogStore',['FETCH_BLOG','ADD_ANSWER']),
        handleSuccessFetchBlog(res){
            console.log(res)
            this.answers=res.answers;
        this.loader=false;
        },
        handleFailFetchBlog(err){
            console.log(err)

        this.loader=false;
        },
        postAnswer(){
            let data={content:this.content,answeredFor:parseInt(this.$route.query.blogId),answeredBy:this?.getUser?.userid}
            this.ADD_ANSWER({
             data,
             success:()=>{},
             fail:()=>{}
            })   
        },
    }
}