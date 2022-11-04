import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';
import { useEffect } from 'react';
import { userGet } from 'redux/Auth/user-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getVerify } from '../../redux/Auth/auth-selector';
import { tokenAuth } from '../../services/API';

export default function MainPage() {
  const token = useSelector(getToken);
  const verify = useSelector(getVerify);
  console.log(verify);
  const dispatch = useDispatch();
  useEffect(() => {
    tokenAuth.set(token);
    dispatch(userGet());
  });
  return (
    <>
      <Main />
      <QuestionButton />
    </>
  );
}
