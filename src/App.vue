<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view name="note"></router-view> -->
    <!-- <router-view name="note"></router-view> -->
    <el-container>
      <el-header>
          This is MyNote
      </el-header>
      <el-main>
        <note></note>
      </el-main>
    </el-container>
  </div>
</template>

<script>
//将App.vue当作一个模板拼接的文件
import Note from '@/components/Note';

export default {
  name: 'App',
  components: {
    Note
  }
}
</script>

<style>

 .el-header {
    background-color: #B3C0D1;
    color: #333;
    /*text-align: center;*/
    line-height: 60px;
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-size: 50px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 60px;*/
  }

  body{
    margin: 0px;
    padding: 0px;
    background-color: #E9EEF3;
    line-height: 60px;
  }
/*#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/

</style>
