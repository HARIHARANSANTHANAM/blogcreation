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
        },
        addNewTag(state,tag)
        {
            state.tags=[...state.tags,tag]
        },
        deleteTag(state,deleteTagId){
            let index = state.tags.map(item => item.tagId).indexOf(deleteTagId) 
            state.tags.splice(index, 1) 
        },
        updateTag(state,updateTag){
            state.tags=state.tags.map(tag=> {
                if(tag?.tagId===updateTag?.tagId)
                {
                    return updateTag;
                }
                else{
                    return tag;
                }
            })
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
        },
        UPDATE_TAG:({commit},{success,fail,data})=>{
            TagService.updateTag({
                success:(res)=>{
                    console.log(res.data)
                    commit("updateTag",res.data);
                    success(res.data)
                },
                fail:(err)=>{
                    fail(err)
                },
                data
            })
        },
        ADD_NEW_TAG:({commit},{success,fail,data})=>{
            TagService.addTag({
                success:(res)=>{
                    console.log(res)
                    commit("addNewTag",res.data)
                    success(res)
                },
                fail:(err)=>{
                    fail(err)
                    console.log(err)
                },
                data
            })
        },
        DELETE_TAG:({commit},{success,fail,data})=>{
            TagService.deleteTag({
                success:(res)=>{
                    console.log(res)
                    commit("deleteTag",data.tagId)
                    success(res)
                },
                fail:(err)=>{
                    fail(err)
                    console.log(err)
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