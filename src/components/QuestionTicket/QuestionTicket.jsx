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

// export const QuestionTicket = () => {
//   const index = useSelector(questionNumber);
//   const randomQuestions = useSelector(getQuestions);
//   const currentQuestion = randomQuestions[index];
//   const answers = useSelector(getAnswers);
//   const dispatch = useDispatch();
//   let answer = null;

//   const handleCheckAnswer = e => {
//     toggleClass();
//     const answerqwe = e.target.textContent;
//     const answerObj = {
//       id: currentQuestion._id,
//       answer: answerqwe,
//     };
//     answer = answerObj;
//     e.target.classList.add('checked');
//     console.log('answer', answer);
//   };

//   function toggleClass() {
//     const wrongAnswers = document.querySelectorAll('.checked');
//     wrongAnswers.forEach(el => {
//       if (!el.classList.contains('unChecked')) {
//         el.classList.add('unChecked');
//       }
//       if (el.classList.contains('checked')) {
//         el.classList.remove('checked');
//       }
//     });
//   }

//   const handleBack = () => {
//     dispatch(questionNumberDecrement());
//     answer = null;
//   };

//   const handleNext = () => {
//     if (answers.length === index && !answer) {
//       console.log('вибери блять щось!!!!!');
//       return;
//     }
//     if (!answer) {
//       dispatch(questionNumberIncrement());
//       return;
//     }
//     if (answer && !answers.find(el => el.id === answer.id)) {
//       dispatch(addAnswers(answer));
//       dispatch(questionNumberIncrement());
//       answer = null;
//       return;
//     } else {
//       dispatch(removeAnswer(answer.id));
//       dispatch(addAnswers(answer));
//       dispatch(questionNumberIncrement());
//       answer = null;
//     }
//   };

//   const handleFinishTest = () => {
//     dispatch(questionNumberReset());
//     dispatch(clearAnswers());
//     dispatch(clearQuestions());
//   };
//   let qwe = '/test';
//   const handleGetResults = () => {
//     if (!answer && answers.length < 12) {
//       console.log('вибери ж блять останню відповідь!!!!!!!');
//       console.log('answer', answer);
//       return;
//     }
//     qwe = '/result';
//     dispatch(addAnswers(answer));
//     dispatch(questionNumberReset());
//   };

//   const isAllAnswers = () => {
//     console.log('~~~ answer', !!answer);
//     console.log('~~~ answers.length', answers.length);
//     return answer && answers.length === 11
//       ? // !answer && answers.length < 12) || (answer && answers.length !== 12
//         '/result'
//       : '/test';
//   };

//   return (
//     <>
//       {currentQuestion && (
//         <div>
//           <b>{currentQuestion.question}</b>
//           <ul>
//             {currentQuestion.answers.map((answer, i) => {
//               return (
//                 <li key={nanoid()}>
//                   {answers.find(
//                     el => el?.id === currentQuestion._id && el.answer === answer
//                   ) ? (
//                     <span
//                       className="checked"
//                       key={nanoid()}
//                       onClick={handleCheckAnswer}
//                     >
//                       {answer}
//                     </span>
//                   ) : (
//                     <span
//                       className="unChecked"
//                       key={nanoid()}
//                       onClick={handleCheckAnswer}
//                     >
//                       {answer}
//                     </span>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//           <div>
//             <b>Question {Number(index) + 1} / 12 </b>
//           </div>
//           <div>
//             <Link to="/home" name="finish" onClick={handleFinishTest}>
//               Finish test
//             </Link>
//             <button
//               className="questionsButton"
//               type="button"
//               name="back"
//               disabled={Number(index) === 0}
//               onClick={handleBack}
//             >
//               Back
//             </button>
//             {Number(index) + 1 < 12 ? (
//               <button
//                 type="button"
//                 name="next"
//                 onClick={handleNext}
//                 className="questionsButton"
//               >
//                 Next
//               </button>
//             ) : (
//               <Link to={qwe} name="exit" onClick={handleGetResults}>
//                 Get results
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

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
            <Link to="/home" name="finish" onClick={handleFinishTest}>
              Finish test
            </Link>
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
                disabled={isDisabledBtn}
              >
                Next
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
