import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:0,
    student:[
      {name:'7yan-1',age:15},
      {name:'7yan-2',age:20},
      {name:'7yan-3',age:25},
      {name:'7yan-4',age:30},
      {name:'7yan-5',age:35}
    ]
  },
  mutations: {
    sadd(){this.state.counter++},
    ssub(){this.state.counter--},
    saddbystep(state,step){
      state.counter += step
    },
    saddstu(state,playload){
      state.student.push(playload.stu)
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    more20stu(state){//这里要传入参数
      return state.student.filter( stu => stu.age > 20)
    },
    more20stulen(state,getters){
      return getters.more20stu.length
    },
    morestybyage(state){//这里要传入参数
      //接受参数
      return age => {
        //return function () {return state.student.filter( stu => stu.age > age)}
        return state.student.filter( stu => stu.age > age)
      }
      //简写
      //return age => state.student.filter( stu => stu.age > age)
    }
  }
})
