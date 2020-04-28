<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <a href="#/">首页</a>
    <a href="#/page">page页面</a> -->
    <!-- <a href="/">首页</a>
    <a href="/page">page页面</a> -->
    <router-link to='/'>首页</router-link>
    <router-link to='/page'>page页面</router-link>
    <router-link to='/work'>work页面</router-link>
    <router-link to='/first'>first页面</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.router-link-active{
  color: rgb(32, 4, 4);
}
</style>
