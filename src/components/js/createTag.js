import SelectTags from "../SelectTags";
import TagMixins from "@/mixins/TagMixins";
import { mapGetters } from "vuex";
import tagService from "@/serviceLayer/tagService";
import Vue from 'vue';

export default{
    name:'CreateTag',
    data(){
        return{
            tagName:'',
            tagDescription:'',
        }
    },
    components:{
        SelectTags
    },  
    mixins:[TagMixins],
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
        ...mapGetters('authStore',['getUser'])
    },
    methods:{
        addTags(){
            console.log(this.$data);
            const data={tagName:this.tagName,tagDescription:this.tagDescription,createdby:this.getUser?.userid}
            tagService.addTag({
                success:(res)=>{
                    console.log(res)
                    Vue.$toast.success('Successfully Tag is added', {
                        position: 'top',
                        duration:3000
                    })
                },
                fail:(err)=>{
                    Vue.$toast.error('Please try again Later', {
                        position: 'top',
                        duration:3000
                    })
                    console.log(err)
                },
                data
            })
        },
    }
}