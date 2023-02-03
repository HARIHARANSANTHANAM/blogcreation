import Multiselect from 'vue-multiselect';

export default{
    name:'SelectTag',
    components:{
        Multiselect
    },
    data()
    {
      return{
        selectedTags: [],
      }  
    },
    props:{
        tags:[],
     },
    methods:{
        selectInput(){
            let tags=this.selectedTags;
            console.log(tags)
            this.$emit('input',[...tags])
        }
        }
    }