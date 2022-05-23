import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const registerUser = (credentials) => {
   return axios.post('users/signup', credentials).then(res => res.data).catch(err => console.log(err));
};

const loginUser = (credentials) => {
   return axios.post('users/login', credentials).then(res => res.data).catch(err => console.log(err));
};

const logoutUser = () => {
   return axios.post('users/logout').then(res => res.data).catch(err => console.log(err));
};

export {registerUser, loginUser, logoutUser};