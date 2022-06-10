import { createAction } from "@reduxjs/toolkit";
import * as actionTypes from './contacts-types';

const addContactRequest = createAction(actionTypes.ADD_CONTACT_REQUEST);
const addContactSuccess = createAction(actionTypes.ADD_CONTACT_SUCCESS);
const addContactError = createAction(actionTypes.ADD_CONTACT_ERROR);

const deleteContactRequest = createAction(actionTypes.DELETE_CONTACT_REQUEST);
const deleteContactSuccess = createAction(actionTypes.DELETE_CONTACT_SUCCESS);
const deleteContactError = createAction(actionTypes.DELETE_CONTACT_ERROR);

const getContactRequest = createAction(actionTypes.GET_CONTACT_REQUEST);
const getContactSuccess = createAction(actionTypes.GET_CONTACT_SUCCESS);
const getContactError = createAction(actionTypes.GET_CONTACT_ERROR);

const filterContacts = createAction(actionTypes.FILTER_CONTACTS);

export {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    getContactRequest,
    getContactSuccess,
    getContactError,
    filterContacts
};