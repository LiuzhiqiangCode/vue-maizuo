<template>
  <div class="page-login">
    <!-- 一级路由页面，登录页面 -->
    <h1>登录页面</h1>

    <input type="text" placeholder="用户名" />

    <input type="password" placeholder="密码" />

    <button @click="handleLogin">点我就登录成功</button>
  </div>
</template>

<script>
export default {
  name: 'Login',

  methods: {
    /**
     * 登录操作
     */
    handleLogin () {
      // 点了就登录成功。。。
      window.localStorage.setItem(
        'userInfo',
        JSON.stringify({ username: '张三' })
      )

      // 登录成功，跳转到首页
      let redirect = this.$route.query.redirect || '/films'
      this.$router.replace(redirect)
    }
  }
}
</script>
