import axios from "axios";
import { BASE_URL, TOKEN } from "../constants/constants";

export const instance = axios.create({
    baseURL: BASE_URL
})

instance.interceptors.request.use(function(config){
    const token = localStorage.getItem(TOKEN); 
    config.headers.Authorization = `Bearer ${token ? token : ''}`
    return config;
}, function(error){
    return Promise.reject(error);
})
