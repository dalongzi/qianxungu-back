import Vue from 'vue'

const api = {
  checkDynamicCode: '/checkDynamicCode',  // 动态验证码
  signin: '/signin',  // 系统登录
}

Vue.prototype.$api = api;

export default api