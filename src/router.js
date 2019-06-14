import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home/"
    },
    {
      path: "/home",
      name: "name",
      component: ()=>import(/* webpackChunkName: 'home' */ './pages/Home'),
      children: [
        {
          path: "admin",
          name: "admin",
          component: ()=>import(/* webpackChunkName: 'admin' */ './pages/Admin/Admin')
        },
        {
          path: "daily",
          name: "daily",
          component: ()=>import(/* webpackChunkName: "daily" */ './pages/Daily/Daily')
        },
        {
          path: "message",
          name: "message",
          component: ()=>import(/* webpackChunkName: "message" */ './pages/Message/Message')
        },
        {
          path: "music",
          name: "music",
          component: ()=>import(/* webpackChunkName: "music" */ './pages/Music/Music')
        },
        {
          path: "musicType",
          name: "musicType",
          component: ()=>import(/* webpackChunkName: "musicType" */ './pages/MusicType/MusicType')
        },
        {
          path: "permission",
          name: "permission",
          component: ()=>import(/* webpackChunkName: "permission" */ './pages/Permission/Permission')
        },
        {
          path: "role",
          name: "role",
          component: ()=>import(/* webpackChunkName: "role" */ './pages/Role/Role')
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: ()=>import(/* webpackChunkName: "login" */ './pages/Login/Login')
    }
  ]
})
