import { mapActions } from "vuex";
import Blog from '../serviceLayer/blogService'
export default{
    methods:{
        ...mapActions('blogStore',['FETCH_BLOGS_BY_USERID']),
        fetchBlogsByUserId({success,fail,data}){
            this.FETCH_BLOGS_BY_USERID({
                success:(res)=>{
                 success(res)
                },
                fail:(err)=>{
                    fail(err)
                },
                data
            })
        },
        createBlog({data,success,fail}){
            Blog.createBlog({
                success:(res)=>{
                    success(res)
                },
                fail:(err)=>{
                    fail(err)
                },
                data
            })
        }
    }
}