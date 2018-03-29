<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <!-- <router-view name="note"></router-view> -->

    <router-view name="notesort"></router-view>
  </div>
</template>

<script>
//将App.vue当作一个模板拼接的文件，而不当作根元素
//仅仅是当作router的视图切换和渲染
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
