import axios from 'axios';

const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api'

});

request.interceptors.request.use(function (res) {
  // Do something before request is sent
  return res;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default request;