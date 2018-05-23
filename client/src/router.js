import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }

  ]
})
