import SelectTags from "../SelectTags";
import { mapActions, mapGetters } from "vuex";
import Vue from 'vue';

export default{
    name:'CreateTag',
    data(){
        return{
            tagName:'',
            tagDescription:'',
            loading:false,
            tagId:{
                type:Number,
            }
        }
    },
    created(){
        let propsdata=this.datas;
        if(propsdata){
        this.tagName=propsdata.tagName;
        this.tagDescription=propsdata.tagDescription;
        this.tagId=propsdata.tagId;
        }
    },
    components:{
        SelectTags
    },  
    props:{
        Type:{
            type:String,
            validator:(val)=> ['UPDATE','CREATE'].includes(val),
            default:'CREATE'
        },
        datas:{
            type:Object,
            default: () => ({}),
            required:false
        },
        modalValue:{
            type:String,
            default:'modal-center',
            required:false
        }
    },
    computed:{
        ...mapGetters('authStore',['getUser']),
        setDisabled:function(){
            return this.tagName=='' || this.tagDescription=='' || this.loading?true:false;
        }
    },
    methods:{
        ...mapActions('tagStore',['ADD_NEW_TAG','UPDATE_TAG']),
        setData(){
            let data;
            switch(this.Type){
            case "CREATE":data={tagName:this.tagName,tagDescription:this.tagDescription,createdBy:this.getUser?.userid};  
                break; 
            case "UPDATE":data={tagName:this.tagName,tagDescription:this.tagDescription,updatedBy:this.getUser?.userid};
            }       
            return data;
        },
        updateTag(){
            this.loading=true
            let data=this.setData();
            console.log(this.tagId)
            data.tagId=this.tagId;
            this.UPDATE_TAG({
                success:()=>{
                    Vue.$toast.success('Tag is Updated Successfully', {
                        position: 'top',
                        duration:3000
                    })
                    this.loading=false;
                    this.$bvModal.hide(this.modalValue);
                },
                fail:(err)=>{
                    Vue.$toast.error('Please try again Later', {
                        position: 'top',
                        duration:3000
                    })

                    this.loading=false;
                    console.log(err)
                    this.$bvModal.hide(this.modalValue);
                },
                data
            })
        },
        addTags(){
            this.loading=true
            let data=this.setData();

            this.ADD_NEW_TAG({
                success:()=>{
                    Vue.$toast.success('Tag is Created Successfully', {
                        position: 'top',
                        duration:3000
                    })
                    this.loading=false;
                    this.$bvModal.hide(this.modalValue);
                },
                fail:(err)=>{
                    Vue.$toast.error('Please try again Later', {
                        position: 'top',
                        duration:3000
                    })

                    this.loading=false;
                    console.log(err)
                    this.$bvModal.hide(this.modalValue);
                },
                data
            })
        },
    }
}