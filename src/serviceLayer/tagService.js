import axios from 'axios'
const mockapi=false;
const mockfetchTags="https://63d2770c06556a0fdd3ce4c0.mockapi.io/Tags"
const mockfetchTag="https://63d2770c06556a0fdd3ce4c0.mockapi.io/Tags"

export const Tag = axios.create({
    baseURL: "/two",
    headers: {
      "content-type": "application/json",
    },
});
const TagURL={
    fetchTags:mockapi?mockfetchTags:"/tag/getTag",
    fetchTag:mockapi?mockfetchTag:"/tag/getTagsById",
    addTag:"two/tag/addTags"
}


const fetchTags=({success,fail})=>{
    Tag.get(TagURL.fetchTags)
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

const fetchTag=({success,fail,data})=>{
    axios.get(TagURL.fetchBlogbyTag+`?tagId=${data}`)
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

const addTag=({success,fail,data})=>{
    axios.post(TagURL.addTag,data)
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



export default {fetchTags,fetchTag,addTag}

