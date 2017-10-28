// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import store from './Vuex/Vuex'

// import routerindex from './router/index'
Vue.use(vueResource)
// Vue.use(Vuex)


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  // el: '#footer',
  router,
  store,
  template: '<App/>',
  components: {App}
})
