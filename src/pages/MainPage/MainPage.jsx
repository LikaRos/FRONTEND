import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';
// import { useDispatch } from 'react-redux';

// import styles from './MainPage.module.css';

// import { getIsLoggedIn } from 'redux/Auth/auth-selector';
// import { useDispatch } from 'react-redux';

export default function MainPage() {
  //   const isLogged = useSelector(getIsLoggedIn);
  //   const dispatch = useDispatch();

  return (
    <>
      <Main />
      <QuestionButton />
    </>
  );
}
