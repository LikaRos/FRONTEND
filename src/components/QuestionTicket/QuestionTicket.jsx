import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './QuestionTicket.module.css';
import {
  getAnswers,
  getQuestions,
  questionNumber,
} from 'redux/questions/questions-selectors';
import {
  addAnswers,
  clearAnswers,
  clearQuestions,
  questionNumberDecrement,
  questionNumberIncrement,
  questionNumberReset,
  removeAnswer,
} from 'redux/questions/questions-slice';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';
import GlobeBack from 'components/Globe/GlobeBack';
import GlobeNext from 'components/Globe/GlobeNext';

export const QuestionTicket = () => {
  const [answer, setAnswer] = useState({});
  const [isDisabledBtn, setIsDisabledNextBtn] = useState(true);

  const dispatch = useDispatch();

  const index = useSelector(questionNumber);
  const randomQuestions = useSelector(getQuestions);
  const currentQuestion = randomQuestions[index];
  const answers = useSelector(getAnswers);

  useEffect(() => {
    if (!!document.querySelector('.checked')) {
      setIsDisabledNextBtn(false);
    } else {
      setIsDisabledNextBtn(true);
    }
  }, [index]);

  const handleCheckAnswer = e => {
    setIsDisabledNextBtn(false);
    const answerqwe = e.target.textContent;
    const answerObj = {
      id: currentQuestion._id,
      answer: answerqwe,
    };
    setAnswer(answerObj);
    console.log('answer', answer);
    if (answers.find(el => el?.id === answerObj.id)) {
      dispatch(removeAnswer(answerObj.id));
    }
    dispatch(addAnswers(answerObj));
  };

  const handleBack = () => {
    dispatch(questionNumberDecrement());
  };

  const handleNext = () => {
    dispatch(questionNumberIncrement());
  };

  const handleFinishTest = () => {
    dispatch(questionNumberReset());
    dispatch(clearAnswers());
    dispatch(clearQuestions());
  };

  return (
    <>
      {currentQuestion && (
        <div className={styles.ticketContainer}>
          <p>Question {Number(index) + 1} / 12 </p>
          <p>{currentQuestion.question}</p>
          <ul className={styles.radioList}>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <li key={nanoid()}>
                  {answers.find(
                    el => el?.id === currentQuestion._id && el.answer === answer
                  ) ? (
                    <span
                      className={styles.checked}
                      key={nanoid()}
                      onClick={handleCheckAnswer}
                    >
                      <span className={styles.dot}></span>
                      {answer}
                    </span>
                  ) : (
                    <span
                      className={styles.unchecked}
                      key={nanoid()}
                      onClick={handleCheckAnswer}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="9" cy="9" r="8.5" stroke="black" />
                      </svg>

                      {answer}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

          <div>
            <Link to="/home" name="finish" onClick={handleFinishTest}>
              Finish test
            </Link>
            <button
              //   className="questionsButton"
              className={styles.btnBack}
              type="button"
              name="back"
              disabled={Number(index) === 0}
              onClick={handleBack}
            >
              <GlobeBack className={styles.svgBackArrow} />
              Back
            </button>
            {Number(index) + 1 < 12 ? (
              <button
                className={styles.btnNext}
                type="button"
                name="next"
                onClick={handleNext}
                //  className="questionsButton"
                disabled={isDisabledBtn}
              >
                Next
                <GlobeNext className={styles.svgNextArrow} />
              </button>
            ) : (
              <Link to="/result" name="exit">
                <button disabled={isDisabledBtn}>Get results</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

/*-----старая версия--------------------------------*/

// import QuestionResult from 'components/QuestionResult/QuestionResult';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';

// import styles from './QuestionTicket.module.css';

// import {
//   getRandomQuestions,
//   questionNumber,
// } from 'redux/questions/questions-selectors';

// export const QuestionTicket = () => {
//   const index = useSelector(questionNumber);
//   const [answer, setAnswer] = useState({});

//   const randomQuestions = useSelector(getRandomQuestions);
//   const currentQuestion = randomQuestions[index];

//   const handleCheckAnswer = e => {
//     const clickedAnswer = e.target.defaultValue;
//     const answerObj = {
//       id: currentQuestion._id,
//       answer: clickedAnswer,
//     };
//     setAnswer(answerObj);
//     console.log(clickedAnswer);
//   };

//   return (
//     <>
//       {currentQuestion && (
//         <div className={styles.ticketContainer}>
//           <p>Question {Number(index) + 1} / 12 </p>
//           <p>{currentQuestion.question}</p>{' '}
//           <ul className={styles.radioList}>
//             {currentQuestion.answers.map((answer, i) => {
//               return (
//                 <li key={i + 1} className={styles.radioItem}>
//                   <input
//                     className={styles.radioBtn}
//                     //   checked={true}
//                     name="question1"
//                     type="radio"
//                     value={answer}
//                     id={i}
//                     key={i}
//                     onChange={handleCheckAnswer}
//                   />
//                   {answer}
//                 </li>
//               );
//             })}
//           </ul>
//           <QuestionResult answer={answer} />
//         </div>
//       )}
//     </>
//   );
// };
