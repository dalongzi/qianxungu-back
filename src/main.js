import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'
import './api/api'
import './utils/myaxios'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

// 全局守卫
router.beforeEach((to, from, next) => {
  if(to.path === "/login"){
    next();
  }else{
    let token = localStorage.getItem("token");
    if(token){
      setTimeout(()=>{
        console.log(to.path.split("/"));
        const permissionData = store.state.permissionData;
        for(var key in permissionData){
          console.log(permissionData[key]);
        }
      },300);
      next();
    }else{
      next({path: "/login", query: {higherRouting: to.fullPath}});
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
