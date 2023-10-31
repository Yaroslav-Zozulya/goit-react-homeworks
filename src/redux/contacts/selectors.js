import { createSelector } from '@reduxjs/toolkit';
import { getFilterValue } from 'redux/filter/selectors';
export const selectContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector(
  [getFilterValue, selectContacts],
  (filter, contacts) => {
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(filter);
    });
  }
);
