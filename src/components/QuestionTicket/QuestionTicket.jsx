// import QuestionResult from 'components/QuestionResult/QuestionResult';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './QuestionTicket.css';
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
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

export const QuestionTicket = () => {
  const [answer, setAnswer] = useState({});
  const index = useSelector(questionNumber);
  const randomQuestions = useSelector(getRandomQuestions);
  // const [index, setIndex] = useState(0);
  // let index = 0;
  // const [currentQuestion, setCurrentQuestion] = useState(
  //   randomQuestions[index]
  // );
  const currentQuestion = randomQuestions[index];
  const answers = useSelector(getAnswers);
  const dispatch = useDispatch();
  // let answer = null;
  // let answers = [];
  // const localData = JSON.parse(localStorage.getItem(CONTACTS_KEY);
  //  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts)

  useEffect(() => {
    console.log('answers', answers);
  }, [answers]);

  const handleCheckAnswer = e => {
    toggleClass();
    const answerqwe = e.target.textContent;
    const answerObj = {
      id: currentQuestion._id,
      answer: answerqwe,
    };
    setAnswer(answerObj);
    e.target.classList.add('checked');
    console.log('e.target.classList', e.target.classList);
    console.log('handleCheckAnswer', answer);
  };

  function toggleClass() {
    const wrongUnswers = document.querySelectorAll('.checked');
    console.log('wrongUnswers', wrongUnswers);
    wrongUnswers.forEach(el => {
      if (!el.classList.contains('unChecked')) {
        el.classList.add('unChecked');
      }
      if (el.classList.contains('checked')) {
        el.classList.remove('checked');
      }
    });
  }

  const handleBack = () => {
    dispatch(questionNumberDecrement());
    // setIndex(index - 1);
    console.log('answers', answers);
  };

  const handleNext = e => {
    dispatch(addAnswers(answer));
    dispatch(questionNumberIncrement());
    // setCurrentQuestion(randomQuestions[index]);
    // e.preventDefault();
    // answers.push(answer);
    // setIndex(index + 1);
    console.log('answers', answers);
  };

  // let isChecked = false;
  return (
    <>
      {currentQuestion && (
        <div>
          <b>{currentQuestion.question}</b>
          <ul>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <li key={nanoid()}>
                  {!answers.find(
                    el => el.id === currentQuestion._id && el.answer === answer
                  ) ? (
                    <span
                      className="unChecked"
                      key={nanoid()}
                      onClick={handleCheckAnswer}
                    >
                      '--' {answer}
                    </span>
                  ) : (
                    <span
                      className="checked"
                      key={nanoid()}
                      onClick={handleCheckAnswer}
                    >
                      '++' {answer}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <div>
            <b>Question {Number(index) + 1} / 12 </b>
          </div>
          {/* <form>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <div key={i + 1}>
                  <label>
                    {answers.find(
                      el =>
                        el.id === currentQuestion._id && el.answer === answer
                    ) ? (
                      <input
                        defaultChecked={true}
                        name="answ"
                        type="checkbox"
                        value={answer}
                        id={i}
                        key={i}
                        onChange={handleCheckAnswer}
                      />
                    ) : (
                      <input
                        // checked={false}
                        name="answ"
                        type="radio"
                        value={answer}
                        id={i}
                        key={i}
                        onChange={handleCheckAnswer}
                      />
                    )}
                    {answers.find(
                      el =>
                        el.id === currentQuestion._id && el.answer === answer
                    ) ? (
                      <span>+++</span>
                    ) : (
                      <span>---</span>
                    )}
                    {answer}
                  </label>
                </div>
              );
            })} */}
          <div>
            <button
              className="questionsButton"
              type="button"
              name="back"
              disabled={Number(index) === 0}
              onClick={handleBack}
            >
              Back
            </button>
            {Number(index) + 1 < 12 ? (
              <button
                type="button"
                name="next"
                onClick={handleNext}
                className="questionsButton"
              >
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
          {/* </form> */}
          {/* <QuestionResult answer={answer} /> */}
        </div>
      )}
    </>
  );
};
