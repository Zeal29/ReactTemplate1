import axios from 'axios';
import { TokenService } from '@/utils/token';
// import store from '../store';

const defaultOptions = {
  baseURL: String(import.meta.env.VITE_BASE_URL) || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
};

let instance = axios.create(defaultOptions);

instance.interceptors.request.use((config) => {
  const token = TokenService.getToken();
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    // Do something with response error
    if (error.response.status === 401) {
      console.log('unauthorized, logging out ...');
      //   await store.dispatch('Logout');
    }
    return Promise.reject(error.response);
  }
);

export { instance as axios };
