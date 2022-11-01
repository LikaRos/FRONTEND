// import QuestionResult from 'components/QuestionResult/QuestionResult';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  getAnswers,
  getRandomQuestions,
  questionNumber,
} from 'redux/questions/questions-selectors';
import {
  addAnswers,
  questionNumberDecrement,
  questionNumberIncrement,
} from 'redux/questions/questions-slice';

export const QuestionTicket = () => {
  // const [answer, setAnswer] = useState({});
  // const index = useSelector(questionNumber);
  const randomQuestions = useSelector(getRandomQuestions);
  const [index, setIndex] = useState(0);
  // let index = 0;
  const currentQuestion = randomQuestions[index];
  // const answers = useSelector(getAnswers);
  const dispatch = useDispatch();
  let answer = null;
  let answers = [];
  // const localData = JSON.parse(localStorage.getItem(CONTACTS_KEY);
  //  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts)

  const handleCheckAnswer = e => {
    const answerqwe = e.target.defaultValue;
    const answerObj = {
      id: currentQuestion._id,
      answer: answerqwe,
    };
    // setAnswer(answerObj);
    answer = answerObj;
    console.log(answer);
  };

  const handleBack = () => {
    // dispatch(questionNumberDecrement());
    setIndex(index - 1);
    console.log('answers', answers);
  };

  const handleNext = e => {
    e.preventDefault();
    // dispatch(questionNumberIncrement());
    setIndex(index + 1);
    answers.push(answer);
    // dispatch(addAnswers(answer));
    console.log('answers', answers);
  };

  // let isChecked = false;
  return (
    <>
      {currentQuestion && (
        <div>
          <b>{currentQuestion.question}</b>
          {/* <ul>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <li key={i + 1}>
                  {answers.find(el => el.answer === answer) ? (
                    <input
                      defaultChecked={true}
                      name="answ"
                      type="radio"
                      value={answer}
                      id={i}
                      key={i}
                      onChange={handleCheckAnswer}
                    />
                  ) : (
                    <input
                      defaultChecked={false}
                      name="answ"
                      type="radio"
                      value={answer}
                      id={i}
                      key={i}
                      onChange={handleCheckAnswer}
                    />
                  )}
                  {console.log(
                    '!!!!!',
                    answers.find(el => el.answer === answer)
                  )}
                  {answer}
                </li>
              );
            })}
          </ul> */}
          <div>
            <b>Question {Number(index) + 1} / 12 </b>
          </div>
          <form>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <label>
                  <input
                    defaultChecked={false}
                    name="answ"
                    type="radio"
                    value={answer}
                    id={i}
                    key={i}
                    onChange={handleCheckAnswer}
                  />
                  Option 1
                </label>
              );
            })}
            <div>
              <button
                type="button"
                name="back"
                disabled={Number(index) === 0}
                onClick={handleBack}
              >
                Back
              </button>
              {Number(index) + 1 < 12 ? (
                <button type="submit" name="next" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <Link
                  to="/result"
                  name="exit"
                  // onClick={getResult}
                >
                  Finish test
                </Link>
              )}
            </div>
          </form>
          {/* <QuestionResult answer={answer} /> */}
        </div>
      )}
    </>
  );
};
