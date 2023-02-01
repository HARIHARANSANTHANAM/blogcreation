import axios from 'axios'

const BLogURL={
    fetchBlogs:"https://63d2770c06556a0fdd3ce4c0.mockapi.io/blogs",
    fetchBlog:"https://63d2770c06556a0fdd3ce4c0.mockapi.io/blogs"
}


const fetchBlogs=({success,fail})=>{
    axios.get(BLogURL.fetchBlogs)
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
    axios.get(BLogURL.fetchBlog+`/${data}`)
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




export default {fetchBlogs,fetchBlog}

