import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from "@/axios"
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.prototype.$axios = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
