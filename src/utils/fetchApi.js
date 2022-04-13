import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const registerUser = (credentials) => {
    axios.post('users/signup', credentials).then(res => res.data).catch(err => console.log(err));
};

const loginUser = (credentials) => {
    axios.post('users/login', credentials).then(res => res.data).catch(err => console.log(err));
};

const logoutUser = () => {
    axios.post('users/logout').then(res => res.data).catch(err => console.log(err));
};

export {registerUser, loginUser, logoutUser};