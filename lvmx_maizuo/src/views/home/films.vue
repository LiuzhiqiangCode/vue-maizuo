<template>
  <div class="page-home-films">
    <!-- 二级路由页面，默认的影片列表页 -->
    <h1>影片列表页</h1>
    <p>仓库中的 age: {{a}}</p>
    <p>仓库中的 title: {{b}}</p>
    <p>{{ reverseMsg }}</p>
  </div>
</template>

<script>
// 下面两行代码看上去很像解构赋值，但是他不是
// import Vuex from 'vuex'
import { mapState } from 'vuex'

export default {
  name: 'Films',
  data () {
    return {
      msg: 'hello'
    }
  },

  // computed: {
  //   age() {
  //     console.log('仓库数据变了')
  //     return this.$store.state.age
  //   },
  //   title() {
  //     return this.$store.state.title
  //   }
  // },
  // computed: mapState(['age', 'title']),
  computed: {
    reverseMsg () {
      return this.msg.split('').reverse().join('')
    },
    ...mapState({
      a: state => state.age,
      b: 'title'
    })
  },
  created () {
    console.log(this.$store.state.age)
    console.log(this.$store.state.title)
  }

}
</script>
