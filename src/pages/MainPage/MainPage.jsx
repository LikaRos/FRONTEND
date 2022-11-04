import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomQuestions } from 'redux/questions/questions-operations';
// import { Modal } from 'components/AuthForm/AuthModal';
// import { userGet } from 'redux/Auth/user-operations';
// import { useEffect } from 'react';
import { getEmail } from 'redux/Auth/auth-selector';
// import { useDispatch } from 'react-redux';

// import styles from './MainPage.module.css';

// import { getIsLoggedIn } from 'redux/Auth/auth-selector';
// import { useDispatch } from 'react-redux';

export default function MainPage() {
  const userEmail = { email: useSelector(getEmail) };
  console.log(userEmail);

  // const [type, setType] = useState(''); //для статистики
  let type = null;
  const dispatch = useDispatch();
  // const [verify, setVerify] = useState(false);
  // useEffect(() => {
  //   console.log(dispatch(userGet()));
  // }, [verify, dispatch]);

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
      <QuestionButton />
    </>
  );
}
