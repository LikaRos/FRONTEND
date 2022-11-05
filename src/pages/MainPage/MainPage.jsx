import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';
import { useEffect } from 'react';
import { userGet } from 'redux/Auth/user-operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  getToken,
  getVerify,
  getLoading,
} from '../../redux/Auth/auth-selector';
import { tokenAuth } from '../../services/API';
import { Modal } from 'components/AuthForm/AuthModal';

export default function MainPage() {
  const token = useSelector(getToken);
  const verify = useSelector(getVerify);
  const isLoading = useSelector(getLoading);
  console.log(isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    tokenAuth.set(token);
    if (!verify) {
      dispatch(userGet());
    }
  });
  return (
    <>
      <Main />
      <QuestionButton />
      {!verify && !isLoading && <Modal />}
    </>
  );
}
