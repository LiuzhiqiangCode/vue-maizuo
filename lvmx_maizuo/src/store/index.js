// 引入Vue
import Vue from 'vue'
// 2.引入vuex
import Vuex from 'vuex'
// 3.调用Vuex这款软件
Vue.use(Vuex)
// 4.实例化仓库的实例对象
const store = new Vuex.Store({
  // 选项配置 state,getters,mutations,actions,modules
  state: {
    title: 'xx图书馆',
    age: 20
  },
  getters: {
    reverseTitle (state) {
      return state.title.split('').reverse().join('')
    }
  },
  mutations: {
    chaTitle (state, payload) {
      state.title = '123'
    }
  },
  actions: {
    syncTitle(context,payload) {
      setTimeout(()=> {
        context.commit('chaTitle')
      },5000)
    }
  }
})
// 5.将仓库的实例对象暴露出去
export default store
