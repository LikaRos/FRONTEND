import React from 'react';
import { useState } from 'react';
import Main from 'components/Main/Main';
import QuestionButtons from 'components/QuestionButtons/QuestionButton';

// import styles from './MainPage.module.css';

export default function MainPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  return (
    <>
      <Main>
        <h3 class="MainPage_mainPage_author"> Джоном Ф. Вудсом.[</h3>
        <h2 class="MainPage_mainPage_quote">
          «Пишите код так, как будто сопровождать его будет склонный к насилию
          психопат, который знает, где вы живете.»
        </h2>
        <p class="MainPage_mainPage_descr">
          Hacker and computer programmer, 1976
        </p>
        <QuestionButtons />
      </Main>
    </>
  );
}
