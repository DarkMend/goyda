import axios, { CreateAxiosDefaults } from "axios";

const URL = 'http://127.0.0.1:8000/api';

const options: CreateAxiosDefaults = {
    baseURL: URL,
    withCredentials: false
}

export const axiosClassic = axios.create(options)