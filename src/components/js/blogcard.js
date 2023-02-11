import Usermixins from "@/mixins/Usermixins";
import CreateQuestion from '@/components/CreateQuestions'
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'BlogCard',
    props: {
        blog: {}
    },
    computed: {
        ...mapGetters('authStore', ['getUser'])
    },
    components:{
        CreateQuestion
    },
    data(){
        return{
            updateBlog:{}
        }
    },
    mixins:[Usermixins],
    methods: {
        ...mapActions('blogStore',['DELETE_BLOG']),
        editBlog(blog) {
            this.updateBlog=blog;
            this.$bvModal.show(`updateBlogModal${(blog?.blogId).toString()}`);
        },
        DeleteQuestion(blogId){
            this.$bvModal.msgBoxConfirm('Are you sure want to Delete?')
          .then(value => {
            if(value){
            this.DELETE_BLOG({
                success:()=>{},
                err:()=>{},
                data:{blogId}
            })
            }
          })
          .catch(err => {
            console.log(err)
          })
            
        }
    }
}