import { NavLink, useLocation } from 'react-router-dom';
import styles from './navigation.module.css';
import Logout from 'components/Loguot/logout';
import { useMediaQuery } from 'usehooks-ts';

const Navigation = ({ isLogin, isActive }) => {
  const location = useLocation();

  const matches = useMediaQuery('(max-width:767px)');

  console.log(isLogin);

  return (
    <nav
      // className={styles.nav}
      className={`${styles.nav} ${isActive ? styles.active : ''}`}
    >
      <ul className={styles.list}>
        {isLogin && (
          <li className={styles.nav_item}>
            <NavLink to="/home" state={location} className={styles.link_btn}>
              Home
            </NavLink>
          </li>
        )}

        {isLogin && (
          <li className={styles.nav_item}>
            <NavLink
              to="/materials"
              state={location}
              className={styles.link_btn}
            >
              Materials
            </NavLink>
          </li>
        )}
        <li className={styles.nav_item}>
          <NavLink to="/contacts" state={location} className={styles.link_btn}>
            Contacts
          </NavLink>
        </li>
        {isLogin && matches && (
          <li className={styles.nav_item}>
            <Logout />
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
