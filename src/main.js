import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import store from './store'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import { setHeaderToken } from '../src/store/modules/utils'

Axios.defaults.baseURL = process.env.VUE_APP_URL
Vue.config.productionTip = false

const token = localStorage.getItem('token');

if (token) { 
  setHeaderToken(token) 
} 




new Vue({ 
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
