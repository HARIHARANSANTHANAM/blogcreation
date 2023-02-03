import axios from 'axios'
const mockapi=false;

const BLOGURL={
    fetchBlogs:mockapi?"https://63d2770c06556a0fdd3ce4c0.mockapi.io/blogs":"/blog/getBlogs",
    fetchBlog:mockapi?"https://63d2770c06556a0fdd3ce4c0.mockapi.io/blogs":"/blog/getBlogsById",
    fetchBlogByTagId:"/blog/getBlogsByTagId",
    fetchBlogByUserId:"/blog/getBlogsByUserId",
    addblogs:"/blog/addBlogs"
}
export const Blog = axios.create({
    baseURL: "/three",
    headers: {
      "content-type": "application/json",
    },
});

const fetchBlogs=({success,fail})=>{
    Blog.get(BLOGURL.fetchBlogs)
    .then((res)=>{
        if(res.status===200){
        success(res);
        }
        else if(res.status >=400 && res.status<=499)
        {
            fail(res.message)
        }
    })
    .catch((err)=>{
        fail(err);
    })
}

const fetchBlog=({success,fail,data})=>{
    Blog.get(BLOGURL.fetchBlog+`?blogId=${data.blogId}&userId=${data.userId}`) // want to add userid &userId=${user}
    .then((res)=>{
        if(res.status===200){
        success(res);
        }
        else if(res.status >=400 && res.status<=499)
        {
            fail(res.message)
        }
    })
    .catch((err)=>{
        fail(err);
    })
}

const fetchBlogByTag=({success,fail,data})=>{

    Blog.get(BLOGURL.fetchBlogByTagId+`?tagId=${data}`)// want to add userid &userId=${user}
    .then((res)=>{
        if(res.status===200){
        success(res);
        }
        else if(res.status >=400 && res.status<=499)
        {
            fail(res.message)
        }
    })
    .catch((err)=>{
        fail(err);
    })
}

const fetchBlogByUserId=({success,fail,data})=>{

    Blog.get(BLOGURL.fetchBlogByUserId+`?userId=${data}`)
    .then((res)=>{
        if(res.status===200){
        success(res);
        }
        else if(res.status >=400 && res.status<=499)
        {
            fail(res.message)
        }
    })
    .catch((err)=>{
        fail(err);
    })
}

const createBlog=({success,fail,data})=>{
    Blog.post(BLOGURL.addblogs,data)
    .then((res)=>{
        if(res.status===200){
        success(res);
        }
        else if(res.status >=400 && res.status<=499)
        {
            fail(res.message)
        }
    })
    .catch((err)=>{
        fail(err);
    })
}




export default {fetchBlogs,fetchBlog,fetchBlogByTag,fetchBlogByUserId,createBlog}