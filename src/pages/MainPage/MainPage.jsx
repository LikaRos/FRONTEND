import React from 'react';
import { useState } from 'react';

import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';

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
  const [type, setType] = useState(''); //для статистики
  //  const [randomQuestions, setRandomQuestions] = useState([]); //для статистики

  //   const addQuestion = () => {
  //     setRandomQuestion;
  //   };

  const handleUpdate = event => {
    const { name } = event.target;
    switch ((name, type)) {
      case 'tech':
        setType('tech');
        break;

      case 'theory':
        setType('theory');
        break;

      default:
        return;
    }
    //  dispatch(getRandomQuestions(type));
  };

  return (
    <>
      <Main />
      <QuestionButton options={options} handleUpdate={handleUpdate} />
    </>
  );
}
