import Vue from 'vue'
export default{
    name:'VotingComponent',
    data(){
        return {
            initialCounter:Vue.util.extend(0, this.counter),
            upvote:{
                active:false
            },
            downvote:{
                active:false
            }
        }
    },
    props:{
       upvoteCount:Number,
       downvoteCount:Number
    },

    methods:{
        vote(increment) {
            this.initialCounter += increment;
          },
        upVote()
        {
            // isVoteForFirstTime()
        },
        // isVoteForFirstTime(){

        // }
    }
}