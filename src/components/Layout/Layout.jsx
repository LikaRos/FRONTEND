import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getIsLoggedIn } from '../../redux/Auth/auth-selector';
import Header from '../../components/Header/Header';

const Layout = () => {
  const isLogin = useSelector(getIsLoggedIn);
  return (
    <>
      {isLogin && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;
