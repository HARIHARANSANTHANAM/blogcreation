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
            newcomment:'',
            showReply:false
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
            type:Object
        }
    },
    computed:{
        ...mapGetters('authStore',['getUser'])
    },
    methods:{
        addComment(){
            
            const data={
                content:this.newcomment,
                commentFor:this.id,
                type:this.Type,
                commentedby:this.getUser?.userid
            }
            console.log(data)
        }
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