import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isContacts = contacts.length !== 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {isContacts && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      )}
    </>
  );
};
