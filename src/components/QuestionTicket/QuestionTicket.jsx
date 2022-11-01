import QuestionResult from 'components/QuestionResult/QuestionResult';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './QuestionTicket.module.css';

import {
  getRandomQuestions,
  questionNumber,
} from 'redux/questions/questions-selectors';

export const QuestionTicket = () => {
  const index = useSelector(questionNumber);
  const [answer, setAnswer] = useState({});

  const randomQuestions = useSelector(getRandomQuestions);
  const currentQuestion = randomQuestions[index];

  const handleCheckAnswer = e => {
    const clickedAnswer = e.target.defaultValue;
    const answerObj = {
      id: currentQuestion._id,
      answer: clickedAnswer,
    };
    setAnswer(answerObj);
    console.log(clickedAnswer);
  };

  return (
    <>
      {currentQuestion && (
        <div className={styles.ticketContainer}>
          <p>Question {Number(index) + 1} / 12 </p>
          <p>{currentQuestion.question}</p>{' '}
          <ul>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <li key={i + 1}>
                  <input
                    //   checked={true}
                    name="question1"
                    type="radio"
                    value={answer}
                    id={i}
                    key={i}
                    onChange={handleCheckAnswer}
                  />
                  {answer}
                </li>
              );
            })}
          </ul>
          <QuestionResult answer={answer} />
        </div>
      )}
    </>
  );
};
