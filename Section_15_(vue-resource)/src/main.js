import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'https://vue-udemy-1b8d7.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT' // overwrite database
  }
  next(response => {
    response.json = () => {
      return {
        messages: response.body
      }
    }
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
