import React from 'react';
// import { useState } from 'react';

import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';
import { useDispatch } from 'react-redux';
import { getRandomQuestions } from 'redux/questions/questions-operations';
// import { Modal } from 'components/AuthForm/AuthModal';
// import { userGet } from 'redux/Auth/user-operations';
// import { useEffect } from 'react';

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
  // const [verify, setVerify] = useState(false);
  // useEffect(() => {
  //   console.log(dispatch(userGet()));
  // }, [verify, dispatch]);

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
