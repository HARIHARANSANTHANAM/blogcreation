import BlogService from '../serviceLayer/blogService';

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
        }
        
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