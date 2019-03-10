//添加学员
export default {
    namespaced:true,
    state:{
      studentList:[],
    },
    getters:{
      newStudent (state){
        return state.studentList.map( (item, index) => {
          return index + item
        })
      }
    },
    mutations:{
      changeStudent(state,{name}){
        state.studentList.push(name);
      }
    },
    actions:{
      changeStudent(ctx,{name}){
        setTimeout( () => {
          ctx.commit('changeStudent',{name});
        },1000)
      }
    }
   }