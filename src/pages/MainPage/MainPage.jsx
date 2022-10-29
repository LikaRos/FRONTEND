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
  //   const { author, description, quotation } =;
  const [tech, setTech] = useState([]); //для статистики
  const [theory, setTheory] = useState([]); //для статистики

  const handleUpdate = event => {
    const { name } = event.target;
    switch (name) {
      case 'tech':
        setTech(prevState => prevState + 1);
        break;

      case 'theory':
        setTheory(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <Main
        author={'author'}
        quotation={'quotation'}
        description={'description'}
      >
        <QuestionButton options={options} handleUpdate={handleUpdate} />
      </Main>
    </>
  );
}
