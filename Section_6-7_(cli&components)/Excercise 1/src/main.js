import Vue from 'vue'
import App from './App.vue'
import ServerList from './components/ServerList.vue'
import ServerDetails from './components/ServerDetails.vue'

Vue.component('server-list', ServerList)
Vue.component('server-details', ServerDetails)

new Vue({
  el: '#app',
  render: h => h(App)
})
