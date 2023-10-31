import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { getFilterValue } from 'redux/filter/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(filter);
  });

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
