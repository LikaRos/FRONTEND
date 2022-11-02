import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { googleAuth } from '../../redux/Auth/auth-slice';
import { tokenAuth } from '../../services/API';
export const GoogleAuth = () => {
  const [params] = useSearchParams();
  const accessToken = params.get('token');
  const email = params.get('email');

  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      tokenAuth.set(accessToken);
      dispatch(googleAuth({ accessToken, email }));
    }
  }, [accessToken, email, dispatch]);
};
// Чи потрібен імейл . Діставити його з параметрів

// Як бути далі  AcessToken  Що куди діспатчити
