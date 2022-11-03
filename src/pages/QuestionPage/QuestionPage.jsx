import { QuestionTicket } from 'components/QuestionTicket/QuestionTicket';
import styles from './QuestionPage.module.css';
// import { AuthPage } from 'pages/AuthPage/AuthPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getIsLoggedIn } from 'redux/Auth/auth-selector';
import {
  getAnswers,
  getRandomQuestions,
} from 'redux/questions/questions-selectors';
// import {
//   addAnswers,
//   clearAnswers,
//   clearQuestions,
// } from 'redux/questions/questions-slice';

export const QuestionPage = () => {
  const questions = useSelector(getRandomQuestions);
  const answers = useSelector(getAnswers);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('questions', questions);
    console.log('answers', answers);
  }, [questions, answers]);

  //   const isLoggedIn = useSelector(getIsLoggedIn);

  //   const handleAddAnswer = () => {
  //     dispatch(addAnswers('answer 1'));
  //     // console.log('answers', answers);
  //   };

  //   const handleClearQuestions = () => {
  //     dispatch(clearQuestions());
  //     // console.log('cleared questions', questions);
  //   };

  //   const handleClearAnswers = () => {
  //     dispatch(clearAnswers());
  //     // console.log('cleared answers', answers);
  //   };

  const handlerTestExit = () => {
    const questions = [];
    dispatch(getRandomQuestions(questions));
  };

  return (
    <>
      {/* <p>Запитання дивись у консолі</p>;
      <button type="button" onClick={handleAddAnswer}>
        addAnswer
      </button>
      <button type="button" onClick={handleClearQuestions}>
        clearQuestions
      </button>
      <button type="button" onClick={handleClearAnswers}>
        clearAnswers
      </button> */}

      {/* {isLoggedIn ? ( */}
      <section className={styles.testSection}>
        <div className={styles.container}>
          {/* {
            (type: 'tech' ? (
              <p>[QA_technical_training]</p>
            ) : (
              <p>[Testing_theory]</p>
            ))
          } */}

          <Link to="/auth" type="button" onClick={handlerTestExit}>
            Exit
          </Link>
        </div>
        <QuestionTicket />
      </section>
      {/* ) : (
        <AuthPage />
      )} */}
    </>
  );
};
