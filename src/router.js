import Vue from 'vue'
import Router from 'vue-router'

// Views
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'

// Global components
import Header from './components/Header'
import Footer from './components/Footer'

Vue.use(Router)

// Register components
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
