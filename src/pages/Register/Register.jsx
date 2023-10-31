import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field type="email" name="email" placeholder="Enter your email" />
        <Field type="text" name="name" placeholder="Enter your name" />
        <Field
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
};

export default Register;
