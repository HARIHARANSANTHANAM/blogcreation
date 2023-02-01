export default{
    name:'Sidebar',
    props:{
        links:[]
    },
    computed:{
        currentRoute() {
            return this.$route.path
          }
          
    },
    methods: {
        isActive(path) {
          return this.currentRoute === path
        }
      }
}