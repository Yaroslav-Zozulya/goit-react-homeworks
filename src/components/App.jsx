import localStorageAPI from './localStorageAPI';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const checkContacts = name =>
    contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

  useEffect(() => {
    setContacts(localStorageAPI.getContacts());
  }, []);

  useEffect(() => {
    if (contacts.length === 0) {
      return;
    }
    localStorageAPI.addContact(contacts);
  }, [contacts]);

  const addContact = (values, actions) => {
    const { name, number } = values;

    const isContact = checkContacts(name);
    if (isContact) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(prevState => [
      ...prevState,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);

    actions.resetForm();
  };

  const deleteContact = e => {
    setContacts([...contacts.filter(contact => contact.id !== e.target.id)]);
  };

  const handleSearchInput = e => {
    setFilter(e.target.value.toLowerCase().trim());
  };

  const isContacts = contacts.length !== 0;

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter)
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      {isContacts && (
        <>
          <h2>Contacts</h2>
          <Filter handleSearchInput={handleSearchInput} />
          <ContactsList
            filteredContacts={filteredContacts}
            deleteContact={deleteContact}
          />
        </>
      )}
    </>
  );
};
