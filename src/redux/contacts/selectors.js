import { getFilterValue } from 'redux/filter/selectors';
export const getContacts = state => state.contacts.items;

export const getVisibileContacts = state => {
  const filter = getFilterValue(state);
  const contacts = getContacts(state);

  return contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(filter);
  });
};
