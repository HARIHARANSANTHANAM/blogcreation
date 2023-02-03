import { mapActions } from "vuex";
export default{
    methods:{
        ...mapActions('tagStore',['FETCH_TAGS']),
        fetchTags({success,fail}){
            this.FETCH_TAGS({
                success:(res)=>{
                    let options=res.map(tag=>{
                        return {value:tag?.tagid,text:tag?.tagname}
                    })
                 success(options)
                },
                fail:(err)=>{
                    fail(err)
                }
            })
        }
    }
}