import axios, { CreateAxiosDefaults } from "axios";
import Cookies from 'js-cookie'
import { removeToken } from "../utils/helpers/token";

const URL = 'http://127.0.0.1:8000/api';

const options: CreateAxiosDefaults = {
    baseURL: URL,
    withCredentials: true
}

export const axiosClassic = axios.create(options);

export const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use(config => {
    const token = Cookies.get('access_token');

    if(token) config.headers.Authorization = `Bearer ${token}`;

    return config;
}, 
error => {
    return Promise.reject(error);
}
)

axiosWithAuth.interceptors.response.use(
    response => {
      return response; 
    },
    error => {
      if (error.response.status == 401 ) {
        removeToken();
        window.location.href = '/auth/login';
      }
    }
  );