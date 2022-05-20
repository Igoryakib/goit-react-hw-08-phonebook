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
} from "./auth-actions";

import { registerUser, loginUser, logoutUser } from "../../utils/fetchApi";

const registerProfile = (credentials) => (dispatch) => {
  dispatch(registerRequest());
  registerUser(credentials)
    .then((data) => dispatch(registerSuccess(data)))
    .catch((err) => dispatch(registerError(err)));
};

const loginProfile = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  registerUser(credentials)
    .then((data) => dispatch(loginSuccess(data)))
    .catch((err) => dispatch(loginError(err)));
};
