import { createSelector } from "@reduxjs/toolkit";
const getLoading = (state) => state.contacts.loading;
const getContacts = (state) => state.contacts.items;
const getFilterContacts = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilterContacts],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export { getContacts, getFilterContacts, getFilteredContacts, getLoading};