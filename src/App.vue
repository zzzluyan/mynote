<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view name="note"></router-view> -->
    <div class="note-container">     
      <div class="note-header">
        This is MyNote
      </div>
      <div class="note-main">
        <note></note>
      </div>
      <div class="note-footer">
        模仿todolist的vue demo
      </div>
    </div>

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
  html,body,#app {
    height: 100%;
  }
  body {
    margin: 0px;
    padding: 0px;
    background-color: #E9EEF3;
    line-height: 60px;

  }
  .note-container {
    /*height: 100%;*/
    position: relative;
  }
  .note-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 50px;
    height: 20%;
  }
  .note-main {
    color: #333;
    max-height: 80%;
    line-height: 60px;
    position: relative;
  }
  .note-footer {
    line-height: 60px;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px;
    bottom: 0px;
    position: fixed;
    width: 100%
  }

/*#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/

</style>
