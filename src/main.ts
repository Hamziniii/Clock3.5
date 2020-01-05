import Vue from 'vue'
import Clock from './Clock.vue'
import './registerServiceWorker'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Clock)
}).$mount('#app')
