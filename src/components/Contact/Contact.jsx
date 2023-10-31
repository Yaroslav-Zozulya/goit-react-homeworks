import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li key={contact.id}>
      <p>{contact.name}</p> <p>{contact.number}</p>
      <button
        id={contact.id}
        onClick={e => dispatch(deleteContact(e.target.id))}
      >
        delete
      </button>
    </li>
  );
};

export default Contact;
