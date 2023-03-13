import axios from "axios";

const API_URL = "http://localhost:4000/";

axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
      const token = 'Bearer ' + user.accessToken;
      config.headers.Authorization =  token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};

export default UserService;
