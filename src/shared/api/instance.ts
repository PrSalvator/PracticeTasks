import axios from "axios";
import { BASE_URL, USER } from "../constants/constants";

export const instance = axios.create({
    baseURL: BASE_URL
})

instance.interceptors.request.use(function(config){
    const user = localStorage.getItem(USER); 
    if(user){
        config.headers.Authorization = `Bearer ${JSON.parse(user).token}`
    }
    return config;
}, function(error){
    return Promise.reject(error);
})

instance.interceptors.response.use(function(response){
    return response;
}, function(error){
    const {response} = error;
    if(response.status === 401){
        localStorage.removeItem(USER);
        window.location.href = "/login";
    }
    return error;
})
