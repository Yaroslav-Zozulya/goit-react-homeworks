import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getVisibileContacts } from 'redux/contacts/selectors';

const ContactsList = () => {
  const contacts = useSelector(getVisibileContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
