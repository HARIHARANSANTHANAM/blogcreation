import QAservice from '@/serviceLayer/QAservice';
import BlogService from '../serviceLayer/blogService';
import Vue from 'vue'

const blogStore={
    state:{
        blogs:[],
        selectedBlog:{}
    },
    mutations:{
        setBlogs(state,blogs){
            state.blogs=blogs;
        },
        setSelectedBlog(state,blog)
        {

            state.selectedBlog=blog;
        },
        // viewCommentForAnswer(state,comment)
        // {
        //     if(comment){
        //     comment=comment.map(comment=>{return {...comment,isExpanded:false}})
        //     let findanswer=state.selectedBlog.answers.findIndex(ans => ans.ansid === comment[0]?.commentedfor)
        //     Vue.set(state.selectedBlog.answers[findanswer], 'comment', comment);
        //     }
        // },
        UPDATE_COMMENT (comments, { parentId, childComment }) {
            const updateComment = (comments, parentId) => {
              for (const comment of comments) {
                if (comment.id === parentId) {
                    console.log(comment+"found!")
                  comment.comments.push(childComment)
                  return
                }
                if (comment.comments) {
                  updateComment(comment.comments, parentId)
                }
              }
            }
            updateComment(comments, parentId)
          },
        viewComment(state,comment)
        {
            if(comment && comment.length!=0){
            comment=comment.map(comment=>{return {...comment,isExpanded:false,comment:[]}})
            switch(comment[0].type)
            {
                case "BLOG": break;
                case "ANSWER":{
                                let findanswer=state.selectedBlog.answers.findIndex(ans => ans.ansid === comment[0]?.commentedfor);
                                if(!state.selectedBlog.answers[findanswer].comments){
                                Vue.set(state.selectedBlog.answers[findanswer], 'comments', comment);
                                }else{
                                this.UPDATE_COMMENT(state.selectedBlog.answers[findanswer],{parentId:comment[0].commentfor,childComment:comment});
                                }
                                break;
                            }
                case "COMMENT":{console.log("comment")
                    break;
                }
                default:break;
            }
            }
        },
        deleteBlog(state,blogId){
            let index = state.blogs.map(item => item.blogid).indexOf(blogId) 
            state.blogs.splice(index, 1) 
        },
        addComment(state,comment){
            if(comment && comment.length!=0)
            {
                switch(comment.type)
                {
                    case "BLOG":this.addCommentToBlog(state,comment);
                                break;
                    case "ANSWER":this.addCommentToAnswer(state,comment);
                                break;
                    case "COMMENT":this.addCommentToComment(state,comment);
                                break;
                    default:break;
                }
            }
        },
        addAnswerToBlog(state,answer){
                state.selectedBlog.push(answer); 
        }
    },

    actions:{
        FETCH_BLOGS:({commit},{success,fail})=>{
                BlogService.fetchBlogs({
                    success:(res)=>{
                        commit("setBlogs",res.data);
                        success(res.data)         
                    },
                    fail:(err)=>{
                        fail(err)
                    }})
          },
        FETCH_BLOG:({commit},{success,fail,data})=>{
            BlogService.fetchBlog({
                success:(res)=>{
                    commit("setSelectedBlog",res.data);
                    success(res.data)
                },
                fail:(err)=>{
                    fail(err)
                },
                data
            })
        },
        FETCH_BLOG_BY_TAG:({commit},{success,fail,data})=>{
            BlogService.fetchBlogByTag({
                success:(res)=>{
                    commit("setBlogs",res.data);
                    success(res.data)
                },
                fail:(err)=>{
                    fail(err)
                },
                data
            })
        },
        FETCH_BLOGS_BY_USERID:({commit},{success,fail,data})=>{
            BlogService.fetchBlogByUserId({
                success:(res)=>{
                    commit("setBlogs",res.data);
                    success(res.data)
                },
                fail:(err)=>{
                    fail(err)
                },
                data
            })
        },
        VIEW_ANSWER_COMMENT:({commit},{success,fail,data})=>{
            QAservice.fetchComments({
                success:(res)=>{
                    console.log(res.data)
                    commit("viewComment",res.data);
                    success(res.data)
                },
                fail:(err)=>{
                    fail(err)
                },
                data
            })
        },

        VIEW_COMMENT_COMMENT:({commit},{success,fail,data})=>{
            QAservice.fetchComments({
                success:(res)=>{
                    console.log(res.data)
                    commit("viewComment",res.data);
                    success(res.data)
                },
                fail:(err)=>{
                    fail(err)
                },
                data
            })
        },

        ADD_COMMENT:({commit},{success,fail,data})=>{
            QAservice.addComments({
                success:(res)=>{
                    console.log(res.data)
                    commit("addComment",res.data);
                    success(res.data)
                },
                fail:(err)=>{
                    fail(err)
                },
                data
            })
        },
        DELETE_BLOG:({commit},{success,fail,data})=>{
            BlogService.deleteBlog({
                success:(res)=>{
                    console.log(res)
                    commit('deleteBlog',data.blogId)
                    success();
                },
                fail:(err)=>{
                    fail(err);
                },
                data
               }) 
        },
        
    },
    getters:{
        getBlogs(state){
            return state.blogs;
          },
          getSelectedBlog(state)
          {
            return state.selectedBlog;
          }
    },
    namespaced:true
}





export default blogStore;