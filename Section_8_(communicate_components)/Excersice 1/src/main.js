import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    getServerStatus(server) {
      this.$emit('statusGeted', server)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
