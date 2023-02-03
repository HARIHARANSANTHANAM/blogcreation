import axios from 'axios';
const QAURL={
    addanswer:"/answer/addAnswer"
}
export const QA = axios.create({
    baseURL: "/three",
    headers: {
      "content-type": "application/json",
    },
});

const answerByBlog=({success,fail,data})=>{
    QA.post(QAURL.addanswer,data)
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

export default {answerByBlog}