import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';

// import styles from './MainPage.module.css';

// import { getIsLoggedIn } from 'redux/Auth/auth-selector';
// import { useDispatch } from 'react-redux';

export default function MainPage() {
  //   const isLogged = useSelector(getIsLoggedIn);
  //   const dispatch = useDispatch();

  return (
    <>
      <Main />
      <QuestionButton />
    </>
  );
}
