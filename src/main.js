// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import Axios from 'axios'
import Public from './assets/publicJs/public'
Vue.use(Vuex)
Vue.use(Public)
Vue.prototype.$axios = Axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    eventHub: new Vue() // 用于事件的发射 和 接收
  },
  store,
  components: { App },
  template: '<App/>'
})
