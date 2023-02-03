import TagService from '../serviceLayer/tagService';

const TagStore={
    state:{
        tags:[],
        selectedTag:{}
    },
    mutations:{
        setTags(state,tags){
            state.tags=tags;
        },
        setSelectedTag(state,Tag)
        {
            state.selectedTag=Tag;
        }
    },
    actions:{
        FETCH_TAGS:({commit},{success,fail})=>{
                TagService.fetchTags({
                    success:(res)=>{
                        commit("setTags",res.data);
                        success(res.data)         
                    },
                    fail:(err)=>{
                        fail(err)
                    }})
          },
        FETCH_TAG:({commit},{success,fail,data})=>{
            TagService.fetchTag({
                success:(res)=>{
                    commit("setSelectedTag",res.data);
                    success(res.data)
                },
                fail:(err)=>{
                    fail(err)
                },
                data
            })
        }
        
    },
    getters:{
        getTags(state){
            return state.tags;
          },
          getSelectedTag(state)
          {
            return state.selectedTag;
          }
    },
    namespaced:true
}

export default TagStore;