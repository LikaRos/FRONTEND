import QuestionResult from 'components/QuestionResult/QuestionResult';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  getAnswers,
  getRandomQuestions,
  questionNumber,
} from 'redux/questions/questions-selectors';

export const QuestionTicket = () => {
  const [answer, setAnswer] = useState({});
  const index = useSelector(questionNumber);
  const randomQuestions = useSelector(getRandomQuestions);
  const currentQuestion = randomQuestions[index];

  const answers = useSelector(getAnswers);

  const handleCheckAnswer = e => {
    const answerqwe = e.target.defaultValue;
    const answerObj = {
      id: currentQuestion._id,
      answer: answerqwe,
    };
    setAnswer(answerObj);
    console.log(answer);
  };
  let isChecked = false;
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
                    // defaultChecked={
                    //   answers.find(el => el.answer === answer) ? true : false
                    // }
                    checked={
                      isChecked
                      // answers.find(el => el.answer === answer) ? true : false

                      // console.log(
                      //   'find',
                      //   answers.find(el => el.answer === answer) ? true : false
                      // )
                    }
                    onChange={() => {
                      isChecked = true;
                    }}
                    name="answ"
                    type="radio"
                    value={answer}
                    id={i}
                    key={i}
                    onInput={handleCheckAnswer}
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
