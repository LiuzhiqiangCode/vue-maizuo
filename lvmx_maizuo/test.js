// 仓库的构造函数
function Store (options) {
  // this -> 下面的 store
  this.state = options.state
  this.mutations = options.mutations
}

// 给 Store 实例的原型上添加 commit 方法
/**
 * fn - 你要调用的 mutation
 * payload - 传递给这个 mutaion 的payload
 */
Store.prototype.commit = function (fn, payload) {
  console.log('我的天, 我被调用了')

  // console.log(this.state)
  // console.log(this.mutations)

  this.mutations[fn](this.state, payload)
}

const store = new Store({
  state: {
    title: '张三'
  },

  mutations: {
    chgTitle (state, payload) {
      console.log(payload)
      console.log(state)
      console.log('chgTitle 这个 mutation 被执行了')
    }
  }
})

store.commit('chgTitle', '张三')
