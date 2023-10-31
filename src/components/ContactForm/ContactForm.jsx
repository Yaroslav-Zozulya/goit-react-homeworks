import { Formik, Form, Field, ErrorMessage } from 'formik';
import { contactsSchema } from 'validation';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };
  const dispatch = useDispatch();
  const handleFormSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactsSchema}
      onSubmit={handleFormSubmit}
    >
      <Form>
        <label>
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          <span>Number</span>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contacts</button>
      </Form>
    </Formik>
  );
};
