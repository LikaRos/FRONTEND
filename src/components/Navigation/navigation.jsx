import { NavLink, useLocation } from 'react-router-dom';
import styles from './navigation.module.css';
import Logout from 'components/Loguot/logout';

const Navigation = ({ isActive }) => {
  const location = useLocation();

  return (
    <nav
      // className={styles.nav}
      className={`${styles.nav} ${isActive ? styles.active : ''}`}
    >
      <ul className={styles.list}>
        <li className={styles.nav_item}>
          <NavLink to="/home" state={location} className={styles.link_btn}>
            Home
          </NavLink>
        </li>
        {/* <div className={styles.btn_overlap}> */}
        <li className={styles.nav_item}>
          <NavLink to="/materials" state={location} className={styles.link_btn}>
            Materials
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink to="/contacts" state={location} className={styles.link_btn}>
            Contacts
          </NavLink>
        </li>
        <li>
          <Logout isHere="onMobile" />
        </li>
        {/* </div> */}
      </ul>
    </nav>
  );
};
export default Navigation;
