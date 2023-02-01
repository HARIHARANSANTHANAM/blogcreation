import { VueEditor } from "vue2-editor";
export default{
    name:'TextEditorComponent',
    components:{
        VueEditor
    },
    data(){
        return {
            content: ""
          };
    },
    methods:{
        setEditorContent(){
                this.$emit('content',this.content);
        }
    }
}