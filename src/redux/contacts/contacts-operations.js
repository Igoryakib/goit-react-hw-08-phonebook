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
} from "./contacts-actions";
import {
  getContacts,
  createContact,
  deleteContact,
} from "../../utils/fetchApi";

const addContact = (contactItem) => (dispatch) => {
  dispatch(addContactRequest());
  createContact(contactItem)
    .then((data) => dispatch(addContactSuccess(data)))
    .catch((err) => dispatch(addContactError(err)));
};

const removeContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    const response = await deleteContact(contactId);
    dispatch(deleteContactSuccess(contactId));
  } catch (err) {
    dispatch(deleteContactError(err));
  }
};

const getContactsArray = () => (dispatch) => {
  dispatch(getContactRequest());
  getContacts()
    .then((data) => dispatch(getContactSuccess(data)))
    .catch((err) => dispatch(getContactError(err)));
};

export { addContact, removeContact, getContactsArray };
