import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.component('ssr-carousel')

// import SsrCarousel from 'vue-ssr-carousel'
// import ssrCarouselCss from 'vue-ssr-carousel/index.css'

// Vue.use(responsive)
// Vue.component( 'ssr-carousel')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
