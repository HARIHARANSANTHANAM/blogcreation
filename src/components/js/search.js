export default{
    data(){
        return{
            searchQuery:""
        }
    },
    watch:{
        searchQuery:function (newVal) {
                this.$emit('value',newVal)
              }
    }
}