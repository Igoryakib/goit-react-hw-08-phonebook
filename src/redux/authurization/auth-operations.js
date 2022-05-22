import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

import { registerUser, loginUser, logoutUser } from "../../utils/fetchApi";
import axios from "axios";

const token = {
  setToken(token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  },
  unSetToken() {
    axios.defaults.headers.common.authorization = "";
  },
};

const registerProfile = (credentials) => (dispatch) => {
  dispatch(registerRequest());
  registerUser(credentials)
    .then((data) => {
      token.setToken(data.token);
      dispatch(registerSuccess(data));
    })
    .catch((err) => dispatch(registerError(err)));
};

const loginProfile = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  loginUser(credentials)
    .then((data) => {
      token.setToken(data.token);
      dispatch(loginSuccess(data));
    })
    .catch((err) => dispatch(loginError(err)));
};

const logoutProfile = () => (dispatch) => {
  dispatch(logoutRequest());

  logoutUser()
    .then((data) => {
      token.unSetToken();
      dispatch(logoutSuccess());
    })
    .catch((err) => dispatch(logoutError(err)));
};
