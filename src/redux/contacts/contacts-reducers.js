import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  filterContacts,
} from "./contacts-actions";

const contactsReducer = createReducer([], {
  [addContactSuccess]: (state, action) => [action.payload, ...state],
  [deleteContactSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
  [getContactSuccess]: (_, action) => action.payload,
});

const errorsReducer = createReducer("", {
  [addContactError]: (_, action) => action.payload,
  [deleteContactError]: (_, action) => action.payload,
  [getContactError]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: (_, action) => true,
  [deleteContactRequest]: (_, action) => true,
  [getContactRequest]: (_, action) => true,
  [addContactSuccess]: (_, action) => false,
  [addContactError]: (_, action) => false,
  [deleteContactSuccess]: (_, action) => false,
  [deleteContactError]: (_, action) => false,
  [getContactSuccess]: (_, action) => false,
  [getContactError]: (_, action) => false,
});

const filterReducer = createReducer("", {
  [filterContacts]: (state, action) => action.payload,
});

export default combineReducers({
  items: contactsReducer,
  errors: errorsReducer,
  loading: loadingReducer,
  filter: filterReducer,
});