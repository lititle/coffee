import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'homePage',
      component: resolve => require(['@/view/homePage/homePage'], resolve)
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: resolve => require(['@/view/homePage/homePage'], resolve)
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/view/test/test'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/view/register/register'], resolve)
    }
  ]
})
