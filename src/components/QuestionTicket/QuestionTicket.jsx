import QuestionResult from 'components/QuestionResult/QuestionResult';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAnswers,
  getRandomQuestions,
  questionNumber,
} from 'redux/questions/questions-selectors';
import { addAnswers } from 'redux/questions/questions-slice';

export const QuestionTicket = () => {
  const index = useSelector(questionNumber);
  const [answer, setAnswer] = useState({});
  const answersFromState = useSelector(getAnswers);

  const dispatch = useDispatch();
  const randomQuestions = useSelector(getRandomQuestions);
  const currentQuestion = randomQuestions[index];

  const handleCheckAnswer = e => {
    const answer = e.target.defaultValue;
    const answerObj = {
      id: currentQuestion._id,
      answer,
    };
    setAnswer(answerObj);
  };

  return (
    <>
      {currentQuestion && (
        <div>
          <b>{currentQuestion.question}</b>

          <ul>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <li key={i + 1}>
                  <input
                    checked={true}
                    name="answ"
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
