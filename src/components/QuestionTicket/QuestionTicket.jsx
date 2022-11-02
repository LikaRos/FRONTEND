// import QuestionResult from 'components/QuestionResult/QuestionResult';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './QuestionTicket.css';
import {
  getAnswers,
  getQuestions,
  questionNumber,
} from 'redux/questions/questions-selectors';
import {
  addAnswers,
  questionNumberDecrement,
  questionNumberIncrement,
  removeAnswer,
} from 'redux/questions/questions-slice';
import { nanoid } from 'nanoid';

export const QuestionTicket = () => {
  const index = useSelector(questionNumber);
  const randomQuestions = useSelector(getQuestions);
  const currentQuestion = randomQuestions[index];
  const answers = useSelector(getAnswers);
  const dispatch = useDispatch();
  let answer = null;

  const handleCheckAnswer = e => {
    toggleClass();
    const answerqwe = e.target.textContent;
    const answerObj = {
      id: currentQuestion._id,
      answer: answerqwe,
    };
    answer = answerObj;
    e.target.classList.add('checked');
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
  };

  const handleNext = e => {
    if (answers.length === index && !answer) {
      console.log('вибери блять щось!!!!!');
      return;
    }
    if (!answer) {
      dispatch(questionNumberIncrement());
      return;
    }
    if (answer && !answers.find(el => el.id === answer.id)) {
      dispatch(addAnswers(answer));
      dispatch(questionNumberIncrement());
      return;
    } else {
      dispatch(removeAnswer(answer.id));
      dispatch(addAnswers(answer));
      dispatch(questionNumberIncrement());
    }
  };
  return (
    <>
      {currentQuestion && (
        <div>
          <b>{currentQuestion.question}</b>
          <ul>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <li key={nanoid()}>
                  {answers.find(
                    el => el?.id === currentQuestion._id && el.answer === answer
                  ) ? (
                    <span
                      className="checked"
                      key={nanoid()}
                      onClick={handleCheckAnswer}
                    >
                      {answer}
                    </span>
                  ) : (
                    <span
                      className="unChecked"
                      key={nanoid()}
                      onClick={handleCheckAnswer}
                    >
                      {answer}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <div>
            <b>Question {Number(index) + 1} / 12 </b>
          </div>
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
              <Link to="/result" name="exit">
                Finish test
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};
