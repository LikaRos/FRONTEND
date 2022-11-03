import React from 'react';
import { useEffect } from 'react';

import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';
import { useDispatch } from 'react-redux';
import { getRandomQuestions } from 'redux/questions/questions-operations';
// import { getEmail, getToken } from 'redux/Auth/auth-selector';
import { userGet } from 'redux/Auth/user-operations';

// import styles from './MainPage.module.css';
const options = [
  {
    name: 'tech',
    title: 'QA technical training',
    id: 1,
  },
  {
    name: 'theory',
    title: 'Testing theory',
    id: 2,
  },
];

export const MainPage = () => {
  const dispatch = useDispatch();
  // const token = useSelector(getToken);
  // const userEmail = useSelector(getEmail);

  // console.log(userEmail);
  useEffect(() => {
    // const userData = {
    //   email: userEmail,
    //   // token: token,
    // };
    console.log(123);
    dispatch(userGet());
  });

  // const [type, setType] = useState(''); //для статистики
  let type = null;
  //  const [randomQuestions, setRandomQuestions] = useState([]); //для статистики

  //   const addQuestion = () => {
  //     setRandomQuestion;
  //   };

  const handleUpdate = async event => {
    const { name } = event.target;
    switch (name) {
      case 'tech':
        type = 'tech';
        break;

      case 'theory':
        type = 'theory';
        break;

      default:
        return;
    }
    dispatch(getRandomQuestions(type));
  };

  return (
    <>
      <Main />
      <QuestionButton options={options} handleUpdate={handleUpdate} />
    </>
  );
};
