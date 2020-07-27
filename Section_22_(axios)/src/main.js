import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'
Vue.use(Vuelidate)
axios.defaults.baseURL = 'https://vue-axios-be27e.firebaseio.com';
//axios.defaults.headers.common['Authorization'] = 'kekkek'; // custom header
axios.defaults.headers.get['Accepsts'] = 'appl'; // custom header

//interceptors
const reqInter = axios.interceptors.request.use(config => {
  config.headers.puk = "pukpuk"
  console.log('InterceptorRequest', config);
  return config; //required
})
axios.interceptors.response.use(res => {
  console.log("interceptorResponce", res);
  return res; //required
})
axios.interceptors.request.eject(reqInter)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

