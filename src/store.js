import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * state:
 *    通过computed(计算属性)返回某个状态  this.$store.state.属性值
 * getters:
 *    store的计算属性,Getter 接受 state 作为其第一个参数,也可以接受其他 getter 作为第二个参数
 *    Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值  this.$store.getters.属性值
 * mutations:
 *    更改 Vuex 的 store 中的状态的唯一方法,它会接受 state 作为第一个参数,大多数情况对象(payload)作为第二个参数
 *    通过调用this.$store.commit方法,如:  this.$store.commit('type',{}) / this.$store.commit({type: 'type'})
 * actions:
 *    异步操作,它会接受 store 作为第一个参数,大多数情况对象(payload)作为第二个参数
 *    通过调用this.$store.dispatch方法,如:  this.$store.dispatch('mutations')
 */

export default new Vuex.Store({
  state: {
    permissionData: []
  },
  mutations: {
    GETPERMISSIONDATA(state,payload){
      state.permissionData = payload
    }
  },
  actions: {
    getPermissionData({commit},products){
      commit('GETPERMISSIONDATA',products)
    }
  }
})
