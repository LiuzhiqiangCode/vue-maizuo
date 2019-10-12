<template>
  <div class="page-home-cinemas">
    <!-- 二级路由页面，影院列表页 -->
    <h1>影院列表页</h1>
    {{age}}
    {{title}}
    {{ a }}
    <p>{{ title }}</p>
    <button @click="chaTitle">点我修改title</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Cinemas',
  computed: {
    ...mapState(['age', 'title']),
    ...mapGetters({
      a: 'reverseTitle'
    })
  },
  // methods: {
  //     fn1(){
  //       this.$store.commit('chaTitle',"我的地")
  //     }
  // },
  methods: {
    ...mapMutations(['chaTitle'])
  },
  created () {
    console.log(this.$store.getters.reverseTitle)
  }
}

</script>
