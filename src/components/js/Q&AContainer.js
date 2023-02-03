import VoteService from '@/serviceLayer/VoteService'
import { mapGetters } from 'vuex'
import VotingComponent from '../../components/VotingComponent.vue'
export default{
    name:'QAContainer',
    components:{
        VotingComponent 
    },
    data(){
        return {
        }
    },
    props:{
        id:{
            type:Number,
            required:true},
        Type:{
            type:String,
            validator:(val)=> ['BLOG', 'COMMENT', 'ANSWER'].includes(val),
            required:true
        },
        data:{
            type:{}
        }
    },
    computed:{
        ...mapGetters('authStore',['getUser'])
    },
    mounted(){
        const data={votedfor:this.id,userId:this.getUser?.userid,type:this.Type}
        VoteService.getVoteStatus({
            success:(res)=>{
                console.log(res);
            },
            fail:(err)=>{
                console.log(err)
            },
            data
        })
    }
}