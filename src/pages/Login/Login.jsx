import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field type="email" name="email" placeholder="Enter your email" />
        <Field
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
