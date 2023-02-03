import { mapActions, mapGetters } from 'vuex'
import BlogCard from '../../components/BlogCard.vue'
import TextEditor from '@/components/TextEditorComponent'
import Usermixins from '@/mixins/Usermixins'
import AnswerContainer from '@/components/AnswerComponent.vue';
import QAContainer from '@/components/Q&AContainer.vue';
import QAservice from '@/serviceLayer/QAservice';
import CommentComponent from '@/components/CommentComponent.vue'
import CommentContainer from '@/components/CommentContainer.vue'
// import comments from '@/Data/comments.js'

export default{
    name:"Blog",
    components:{
        BlogCard,
        TextEditor,
        AnswerContainer,
        QAContainer,
        CommentComponent,
        CommentContainer
    },
    computed:{
        ...mapGetters('blogStore',['getSelectedBlog']),
        ...mapGetters('authStore',['getUser'])
    },
    data(){
        return {
            loader:false,
            answers:[],
            commentdata:[
                {
                    comment:"Shared prefernce is working",
                    isExpanded:false,
                    comments:[{
                        comment:"Shared prefernce is working 1.1",
                    isExpanded:false,
                        comments:[]
                    },{
                        comment:"Shared prefernce is working 1.2",
                    isExpanded:false,
                        comments:[{
                            comment:"Shared prefernce is working 1.2.1",
                    isExpanded:false,
                        }]
                    }]
                },
            ]
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
                ...mapActions('blogStore',['FETCH_BLOG']),
        handleSuccessFetchBlog(res){
            console.log(res)
            this.answers=res.answers;
        this.loader=false;
        },
        handleFailFetchBlog(err){
            console.log(err)

        this.loader=false;
        },
        fetchContent(content){
            console.log(content)
                let data={content,answeredFor:parseInt(this.$route.query.blogId),answeredBy:this?.getUser?.userid}
               QAservice.answerByBlog({
                success:(res)=>{
                    console.log(res)
                    this.answers.push(res.data)
                },
                fail:(err)=>{
                    console.log(err)
                },
                data
               }) 
        }
    }
}