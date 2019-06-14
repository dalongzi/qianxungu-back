import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

const myaxios = {
  get: function(url,params){
    return axios.get(url,{params: params})
  },
  post: function(url,params){
    return axios.post(url,params)
  }
}

Vue.prototype.$myaxios = myaxios;

export default myaxios