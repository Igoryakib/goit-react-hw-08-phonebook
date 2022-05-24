import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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

const initialState = {name: null, email: null};

const user = createReducer(initialState, {
    [registerSuccess]: (_, action) => action.payload.user,
    [loginSuccess]: (_, action) => action.payload.user,
    [logoutSuccess]: () => initialState,
    [getCurrentUserSuccess]: (_, action) => action.payload,
});

const token = createReducer('', {
    [registerSuccess]: (_, action) => action.payload.token,
    [loginSuccess]: (_, action) => action.payload.token,
    [logoutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [getCurrentUserSuccess]: () => true,
    [logoutSuccess]: () => false,
    [registerError]: () => false,
    [loginError]: () => false,
    [getCurrentUserError]: () => false,
  });

const error = createReducer('', {
    [registerError]: (_, action) => action.payload,
    [loginError]: (_, action) => action.payload,
    [logoutError]: (_, action) => action.payload,
    [getCurrentUserError]: (_, action) => action.payload
});

export default combineReducers({
    user,
    token,
    isAuthenticated,
    error
})