// import QuestionTicket from 'components/QuestionTicket/QuestionTicket';
import {
  getRandomQuestions,
  getAnswers,
} from 'redux/questions/questions-selectors';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import {
//   addAnswers,
//   clearAnswers,
//   clearQuestions,
// } from 'redux/questions/questions-slice';

export default function QuestionPage() {
  const questions = useSelector(getRandomQuestions);
  const answers = useSelector(getAnswers);
  //   const dispatch = useDispatch();

  useEffect(() => {
    console.log('questions', questions);
    console.log('answers', answers);
  }, [questions, answers]);
}

// export default function QuestionPage() {
//   const dispatch = useDispatch();
//   const testTech = useSelector(getTechTest);
//   const theoryTest = useSelector(getTheoryTest);
//   const isLogin = useSelector(getIsLoggedIn);
//   const handleResult = () => {
//     const questions = [];
//     dispatch(getRandomQuestions(questions));
//   };
//   return <></>;
// }
