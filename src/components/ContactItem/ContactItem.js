import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li key={id} className={s.contact}>
    <p className={s.contactText}>{name}</p>
    <p className={s.contactText}>{number}</p>
    <button
      type="button"
      id={id}
      onClick={() => onDelete(id)}
      className={s.button}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
