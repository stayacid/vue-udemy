import Vue from 'vue';
import Vuex from 'vuex'
import counter from './modules/counter'

import * as myActions from './actions'
import * as mutations from './mutations'
import * as myGetters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { // store data
    value: 0
  },
  getters: { //perform operations with data
    ...myGetters
  },
  mutations,
  actions: { // better to always use actions if we have at least one async task
    ...myActions
  },
  modules: {
    counter
  }
})