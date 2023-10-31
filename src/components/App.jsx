import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isContacts = contacts.length !== 0;

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
