import Usermixins from "@/mixins/Usermixins";
import { mapActions, mapGetters } from "vuex";
import CreateTag from '@/components/CreateTag'

export default{
    name:'TagCard',
    props:{
        tag:{}
    },
    components:{
        CreateTag
    },
    mixins:[Usermixins],
    data(){
        return{
            updateTag:{}
        }
    },
    computed:{
        ...mapGetters('authStore',['getUser'])
    },
    methods:{
        ...mapActions('tagStore',['DELETE_TAG']),
        editTag(tag) {
            this.updateTag=tag;
            this.$bvModal.show(`updateTagModal${(tag?.tagId).toString()}`);
        },
        DeleteTag(tagid){
            this.$bvModal.msgBoxConfirm('Are you sure want to Delete?')
            .then(value => {
              if(value){
              this.DELETE_TAG({
                  success:()=>{},
                  err:()=>{},
                  data:{deleteTag:tagid}
              })
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
    }
}