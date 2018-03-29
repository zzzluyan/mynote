// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
// import VueResource from 'vue-resource';
import axios from 'axios';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Vue.use(VueResource);
// Vue.use(axios);//axios不是vue插件，不能用use方法调用
Vue.prototype.axios = axios;