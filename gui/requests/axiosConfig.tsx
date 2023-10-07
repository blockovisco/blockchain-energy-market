import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.38:6060",
  timeout: 4000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

// Where you would set stuff like your 'Authorization' header, etc ...
//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Interceptors && all the other cool stuff

export default instance;
