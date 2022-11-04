import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';
import { useSelector } from 'react-redux';

import { getEmail } from 'redux/Auth/auth-selector';

export default function MainPage() {
  const userEmail = { email: useSelector(getEmail) };
  console.log(userEmail);

  return (
    <>
      <Main />
      <QuestionButton />
    </>
  );
}
