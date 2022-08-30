import Axios, { AxiosRequestConfig } from 'axios';

import { API_URL, API_KEY } from '@/config';

function authRequestInterceptor(config: AxiosRequestConfig) {
  if (config.headers) {
    config.headers['X-API-KEY'] = `${API_KEY}`;
    config.headers.Accept = 'application/json';
  }
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    // TODO: グローバルステートでエラーメッセージを管理
    // TODO: 後で消す
    console.log(message);

    return Promise.reject(error);
  }
);
