import Vue from 'vue'
export default{
    name:'VotingComponent',
    data(){
        return {
            initialCounter:Vue.util.extend(0, this.counter)
        }
    },
    props:{
       counter:Number
    },
    methods:{
        vote(increment) {
            this.initialCounter += increment;
          }
    }
}