import { mapGetters } from "vuex"

export default{
    name:'CommentComponent',
    props:{
        id:Number,
        comment:{
            type:Object,
            required:true
        },
    },
      computed:{
        ...mapGetters('authStore',['getUser'])
      },
}