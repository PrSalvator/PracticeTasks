import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InRlc3QtMSIsImlhdCI6MTcxOTgyMjUwNn0.feyRPAWGZy5FpPr6kTH6QFK97cDZYc0NkpbDwIebF_g"

axios.defaults.baseURL = "http://212.113.102.189:7000/"

axios.interceptors.request.use(function(config){
    config.headers.Authorization = `Bearer ${token}`
    return config;
}, function(error){
    return Promise.reject(error);
})

export {axios}