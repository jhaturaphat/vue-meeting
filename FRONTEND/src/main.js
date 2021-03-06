import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/style.css'
import * as jquery from 'jquery'

Vue.config.productionTip = false
Vue.prototype.jquery = jquery

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
