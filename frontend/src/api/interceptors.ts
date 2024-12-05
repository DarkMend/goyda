import axios, { CreateAxiosDefaults } from "axios";
import Cookies from 'js-cookie'

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
})