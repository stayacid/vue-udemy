import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from './axios-auth';
import globalAxios from 'axios';
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },

  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuthData(state) {
      state.idToken = null
      state.userId = null
    }
  },

  actions: {
    signup({commit, dispatch}, authData) {
      axiosInstance.post('/accounts:signUp?key=AIzaSyB5Kytt7lWu04q1Eo_GbOjFVyrEGmFmOA0', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log('signup', res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          //save token and user data into localstorage
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)

          dispatch('storeUser', authData)
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error))
    },
    login({commit, dispatch}, authData) {
      axiosInstance.post('/accounts:signInWithPassword?key=AIzaSyB5Kytt7lWu04q1Eo_GbOjFVyrEGmFmOA0', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log('login', res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          //save token and user data into localstorage
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log('login error' , error))
    },
    //check localstorage for token and autologin
    autoLogin({commit}) {
      const token = localStorage.getItem('token');
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
    },

    storeUser({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log('storeUser', res))
        .catch(error => console.log('storeUser error', error))
    },
    //get users from database (for example)
    fetchUser({commit, state}) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(res => {
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log('fetchUser', users);
          commit('storeUser', users[0])
        })
        .then(error => console.log('fetchUser error', error))
    },
    setLogoutTimer({dispatch}, expirationTime) {
      setTimeout(() => {
        dispatch('logout')
      }, expirationTime * 1000) //logout after 1 hour when token will expire
    },
    logout({commit}) {
      commit('clearAuthData')
      localStorage.removeItem('userId')
      localStorage.removeItem('token')
      localStorage.removeItem('expirationDate')
      router.replace('/signin') //replace current route 
    },

  },

  getters: {
    user(state) {
      return state.user
    },
     isAuth(state) {
       return state.idToken !== null
     }
  }
})