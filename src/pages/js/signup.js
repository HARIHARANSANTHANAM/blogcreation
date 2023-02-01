import Multiselect from 'vue-multiselect';


export default{
    name:'SignUpComponent',
    components:{
        Multiselect
    },
    data(){
        return{
            user:{
                username:'',
                password:'',
                email:'',
                jobdescription:'',
                repeatPassword:''
            },
            selectedOptions: [],
      options: [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
        { value: 3, text: 'Option 3' },
        { value: 4, text: 'Option 4' },
      ],
        }
    },
    methods:{
        addUser(){
                console.log(this.$data);
        }
    }
}