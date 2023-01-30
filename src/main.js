import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.config.productionTip = false

new Vue({
  VueAgile,
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
