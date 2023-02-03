import TagMixins from "@/mixins/TagMixins";
import SelectTags from "../SelectTags";
import BlogMixins from '@/mixins/BlogMixins'
import { mapGetters } from "vuex";
import TextEditorComponent from '../../components/TextEditorComponent'
import Vue from 'vue'

function initialState (){
    return {
        data:{
            title:'',
            description:'',
            thingsTried:'',
            tagId:[]
        },
        message: '',
        messageVariant: '',
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
        TextEditorComponent
    },  
    mixins:[TagMixins,BlogMixins],
    mounted(){
        this.fetchTags({
            success:(res)=>{
                this.tags=res;
        },
        fail:(err)=>{
            console.log(err)
        }
    })
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
        fetchDescription(description){
            console.log(description)
            this.data.description=description;
        },
        fetchTried(tried){
            console.log(tried)
            this.data.thingsTried=tried;
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