import { createAction } from "@reduxjs/toolkit";

import actionTypes from "./auth-types";

const registerRequest = createAction(actionTypes.REGISTER_REQUEST);
const registerSuccess = createAction(actionTypes.REGISTER_SUCCESS);
const registerError = createAction(actionTypes.REGISTER_ERROR);

const loginRequest = createAction(actionTypes.LOGIN_REQUEST);
const loginSuccess = createAction(actionTypes.LOGIN_SUCCESS);
const loginError = createAction(actionTypes.LOGIN_ERROR);

const logoutRequest = createAction(actionTypes.LOGOUT_REQUEST);
const logoutSuccess = createAction(actionTypes.LOGOUT_SUCCESS);
const logoutError = createAction(actionTypes.LOGOUT_ERROR);

const getCurrentUserRequest = createAction(actionTypes.CURRENT_USER_REQUEST);
const getCurrentUserSuccess = createAction(actionTypes.CURRENT_USER_SUCCESS);
const getCurrentUserError = createAction(actionTypes.CURRENT_USER_ERROR);

export {
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
};
