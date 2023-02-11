import TagMixins from "@/mixins/TagMixins";
import SelectTags from "../SelectTags";
import BlogMixins from '@/mixins/BlogMixins'
import { mapGetters } from "vuex";
import Vue from 'vue'
import { VueEditor } from "vue2-editor";


function initialState (){
    return {
        data:{
            title:'',
            description:'',
            thingsTried:'',
            tagId:[]
        },
        tags:[]
    }
  }
export default{
    name:'CreateTag',
    data(){
        return initialState()
    },
    components:{
        SelectTags,
        VueEditor
    },  
    mixins:[TagMixins,BlogMixins],
   created(){
       let propsdata=this.datas;
       
       console.log(propsdata)
        this.data={title:propsdata.title,
            description:propsdata.blogDescription,
            thingsTried:propsdata.thingsTried,
        }
        let options=propsdata.blogtags.map(tag=>{
            return {value:tag?.tagid,text:tag?.tagname}
        })
        console.log(options);
        this.$data.data.tagId=options;
   },
   mounted(){
    if(this.tags?.length==0){
    this.fetchTags({
        success:(res)=>{
            this.tags=res;
    },
    fail:(err)=>{
        console.log(err)
    }});
   }},
    props:{
        Type:{
            type:String,
            validator:(val)=> ['UPDATE','CREATE'].includes(val),
            default:'CREATE'
        },
        datas:{
            type:Object,
            default:{},
            required:false
        }
    },
    computed:{
        ...mapGetters('authStore',['getUser']),
        isAllFilled(){
            let data=Object.entries(this.$data.data)
            let result=data.some(entry=>{
                if(entry[1]!='') return false;
                return true
            })
            return result;
        }
    },
    methods:{
        inputSelectTags(value)
        {
            let data=value.map(value=>{return {'tagid':value.value,'tagname':value.text}});
            this.data.tagId=data;
        },
        createQuestions(){
            console.log(this.$data)
            let data=this.$data.data;
            console.log(data)
            data={...data,postedBy:this.getUser?.userid};
            this.createBlog({
                success:(res)=>{
                    console.log(res);
                    Vue.$toast.success('Blog is Created', {
                        position: 'top',
                        duration:3000
                    })
                    this.$router.push('/MyQuestions');
                    Object.assign(this.$data, initialState());
                },
                fail:(err)=>{
                    console.log(err)
                    Vue.$toast.error('Please Try again Later', {
                        position: 'top',
                        duration:3000
                    })
                    Object.assign(this.$data, initialState());
                },
                data
            })
        }
    }
}