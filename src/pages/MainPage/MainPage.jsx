import React from 'react';
import { useState } from 'react';

import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomQuestions } from 'redux/questions/questions-operations';
// import { Modal } from 'components/AuthForm/AuthModal';
import { getEmail, getVerify } from 'redux/Auth/auth-selector';
import { useEffect } from 'react';
import { userGet } from 'redux/Auth/auth-operations';

// import styles from './MainPage.module.css';
const options = [
  {
    name: 'tech',
    title: 'QA technical training',
    id: 1,
  },
  {
    name: 'theory',
    title: 'Testing theory',
    id: 2,
  },
];

export default function MainPage() {
  // const [type, setType] = useState(''); //для статистики
  let type = null;
  const dispatch = useDispatch();

  const userEmail = { email: useSelector(getEmail) };
  // const [verify, setVerify] = useState(false);
  dispatch(userGet(userEmail));
  // useEffect(() => {
  //   dispatch(userGet(userEmail));
  // }, [dispatch, userEmail]);

  // const currentUser = useSelector(getVerify);
  // console.log(currentUser);
  //  const [randomQuestions, setRandomQuestions] = useState([]); //для статистики

  //   const addQuestion = () => {
  //     setRandomQuestion;
  //   };

  const handleUpdate = async event => {
    const { name } = event.target;
    switch (name) {
      case 'tech':
        type = 'tech';
        break;

      case 'theory':
        type = 'theory';
        break;

      default:
        return;
    }
    dispatch(getRandomQuestions(type));
  };

  return (
    <>
      <Main />
      <QuestionButton options={options} handleUpdate={handleUpdate} />
    </>
  );
}
