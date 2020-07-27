import Home from './components/Home.vue'
import Header from './components/Header.vue'

const User = resolve => { //lazy load component
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'))
  }, 'user')
}
const UserStart = resolve => { //lazy load component
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'))
  }, 'user')
}
//User and UserStart load in one bundle 'user
const UserDetail = resolve => { //lazy load component
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'))
  })
}
const UserEdit = resolve => { //lazy load component
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'))
  })
}



export const routes = [{
    path: '',
    name: 'home',
    components: {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/user',
    props: true,
    components: {
      default: User,
      'header-bottom': Header
    },
    children: [{ // 
        path: '',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetail,
        props: true, //to pass an id
        beforeEnter: (to, from, next) => {
          console.log('inside route setup');
          next()
        }
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      }
    ]
  },
  {
    path: '/redirect-me', // redirect
    redirect: {
      name: 'home'
    }
  },
  {
    path: '*', // like 404
    redirect: '/'
  }
]