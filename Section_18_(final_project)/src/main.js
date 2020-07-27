import Vue from 'vue'
import App from './App.vue'

//router
import VueRouter from 'vue-router'
import { routes } from './routes'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

//store
import store from './store/store'

//filter
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
});

//http
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'https://vue-stock-2bda4.firebaseio.com/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
