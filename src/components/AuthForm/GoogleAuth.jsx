import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { googleAuth } from '../../redux/Auth/auth-slice';
// import { userGet } from '../../redux/Auth/user-operations';
import { tokenAuth } from '../../services/API';
export const GoogleAuth = ({ children }) => {
  const [params] = useSearchParams();
  const accessToken = params.get('token');
  //   const email = params.get('email');
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      tokenAuth.set(accessToken);
      dispatch(googleAuth({ accessToken }));
    }
  }, [accessToken, dispatch]);
  return children;
};
// Чи потрібен імейл . Діставити його з параметрів

// Як бути далі  AcessToken  Що куди діспатчити
