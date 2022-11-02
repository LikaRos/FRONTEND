import React from 'react';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { logIn, signIn } from '../../redux/Auth/auth-operations';
import styles from './authForm.module.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormField } from './formic/FormField';
// import googleIcon from '../../svg/google-auth.png';
// import Notifications from './pushNotifications/Notifications';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [emptyInput, setEmptyInput] = useState(false);
  //   const [invalidEmail, setInvalidEmail] = useState(false);
  //   const [smallLengthPassword, setSmallLengthPassword] = useState(false);

  const onChange = event => {
    // setEmptyInput(false);
    switch (event.currentTarget.name) {
      case 'email':
        // setInvalidEmail(false);
        setEmail(event.currentTarget.value);
        break;

      case 'password':
        // setSmallLengthPassword(false);
        setPassword(event.currentTarget.value);
        break;

      default:
        return;
    }
  };
  const handleLogin = event => {
    event.preventDefault();
    const credentials = { email, password };

    // if (checkValidData()) {
    //   return;
    // }
    dispatch(logIn(credentials));
  };

  //   const checkValidData = () => {
  //     let key = false;

  //     if (email === '') {
  //       setEmptyInput(true);
  //       key = true;
  //     }

  //     if (!email.includes('@')) {
  //       setInvalidEmail(true);
  //       key = true;
  //     }

  //     if (password.length < 8) {
  //       setSmallLengthPassword(true);
  //       key = true;
  //     }

  //     return key;
  //   };
  const handleRegister = () => {
    const credentials = { email, password };
    // if (checkValidData()) {
    //   return;
    // }
    dispatch(signIn(credentials));
  };
  const onHandleSigIn = async () => {
    window.location.replace('http://localhost:3001/api/googleAuth/google');
  };

  const schema = Yup.object({
    email: Yup.string()
      .email('Невалидный e-mail')
      .max(50, 'E-mail должен быть меньше 50 символов')
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        'Некоректный e-mail'
      )
      .required('Обязательное поле'),
    password: Yup.string()
      .max(20, 'Пароль должен быть меньше 20 символов')
      .min(6, 'Минимум 6 символов')
      .matches(
        /^(?=.*[a-z])|(?=.*[0-9])|(?=.*[!@#$%^&*])$/,
        'Пароль должен содержать только латинские буквы'
      )
      .required('Обязательное поле'),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
      >
        {Formik => (
          <div className={styles.formWrapper}>
            <p className={styles.formText}>
              You can use your Google Account to authorize:
            </p>
            <button onClick={onHandleSigIn} className={styles.googleButton}>
              Google
            </button>
            {/* <button type="" className={styles.authButton}>
            <a
              className={styles.googleIcon}
              href=" http://localhost:3001/api/googleAuth/google"
            >
              <div className={styles.googleBtnContentWraper}>
                <img alt="google" src={googleIcon} />
                <span>Google</span>
              </div>
            </a>
          </button> */}
            <p className={styles.formText}>
              Or login to our app using e-mail and password:
            </p>

            <Form className={styles.signUpForm}>
              <input
                className={styles.input}
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                placeholder="E-mail"
                autoComplete="on"
              />
              {/* <div className={styles.invalid}>
              <ErrorMessage className={styles.invalid} name="password" />
            </div> */}
              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                autoComplete="on"
              />
              <div className={styles.formButtonWrapper}>
                <FormField
                  to="/home"
                  className={styles.formButton}
                  onClick={handleLogin}
                >
                  Sign in
                </FormField>
                <FormField
                  to="/home"
                  className={styles.formButton}
                  onClick={handleRegister}
                >
                  Sign up
                </FormField>
              </div>
            </Form>
            {/* <Notifications /> */}
          </div>
        )}
      </Formik>
    </>
  );
};

// const mapDispatchToProps = dispatch => ({
//   onLogin: values => dispatch(authOperations.loginUser(values)),
// });
