import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import VueResource from 'vue-resource'
import './plugins/v-charts'
import GlobalValue from './plugins/globalvalue'
Vue.use(VueResource)
Vue.prototype.GLOBAL=GlobalValue
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
