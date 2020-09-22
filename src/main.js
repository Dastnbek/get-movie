import Vue from 'vue'
// bootstrap
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//pwa
import './registerServiceWorker'
// vue-router
import router from './router'
// vuex
import store from './store'
//custom
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
