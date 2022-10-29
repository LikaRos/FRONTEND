import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getIsLoggedIn } from '../../redux/Auth/auth-selector';
import Navigation from '../Navigation/navigation';

const Layout = () => {
  const isLogin = useSelector(getIsLoggedIn);
  return (
    <>
      {isLogin && <Navigation />}
      <Outlet />
    </>
  );
};

export default Layout;
