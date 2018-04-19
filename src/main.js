// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
// import VueResource from 'vue-resource'
// import axios from 'axios'//吧axios异步请求单独放个模块
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(ElementUI);
// Vue.use(VueResource);
// Vue.use(axios);//axios不是vue插件，不能用use方法调用
// Vue.prototype.$axios = axios; //组件里的this中的指向,不是vue对象,而是组件对象
