import axios from "axios";

const axiosOption = {
    // 设置url 解析地址
  baseURL: process.env.VUE_APP_API_ROOT,
  timeout: 10000,
};
console.log(process.env.VUE_APP_API_ROOT)
// 创建axios实例
const service = axios.create(axiosOption);

//添加请求拦截器
service.interceptors.request.use(
  function (config) {
    //在发送请求之前做一些事情
    return config;
  },
  function (error) {
    //队请求错误做些什么
    return Promise.reject(error);
  }
);
//添加响应拦截器
service.interceptors.response.use(
  function (response) {
    //使用响应数据返回响应；
    const data = response.data;
    // 如果data.code
    if (data.code) {
      return Promise.resolve(data);
    }
    return response;
  },
  function (error) {
    //使用响应错误返回
    return Promise.reject(error);
  }
);
// 将service 导出
export default service;
