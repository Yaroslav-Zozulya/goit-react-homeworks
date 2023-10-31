import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
