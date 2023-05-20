//引入axios
import axios from "axios";

//创建实例
const request = axios.create({
  baseURL: "",
  timeout: 3000,
});

//拦截器
request.interceptors.request.use(
  (config) => {
    //config就是请求的信息
    return config;
  },
  (error) => {
    //抛出错误信息
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    //抛出错误信息
    return Promise.reject(error);
  }
);

export default request;
