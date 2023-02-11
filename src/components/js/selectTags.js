import Multiselect from 'vue-multiselect';
import Vue from 'vue';
export default{
    name:'SelectTag',
    components:{
        Multiselect
    },
    data()
    {
      return{
        selectedTag: Vue.util.extend([], this.selectedTags),
      }  
    },
    props:{
        tags:[],
        selectedTags:[]
     },
    methods:{
        selectInput(){
            let tags=this.selectedTag;
            console.log(tags)
            this.$emit('input',[...tags])
        }
        }
    }