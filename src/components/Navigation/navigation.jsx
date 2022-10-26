import { NavLink, useLocation } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.link_btn_report}>
          <NavLink
            to="/home"
            state={location}
            className={styles.link_report}
          >
						Home
          </NavLink>
        </li>
        <div className={styles.btn_overlap}>
          <li className={styles.link_btn}>
            <NavLink
              to="/materials"
              state={location}
              className={styles.link_tab}
            >
              Materials
            </NavLink>
          </li>
          <li className={styles.link_btn}>
            <NavLink
              to="/contacts"
              state={location}
              className={styles.link_tab_inc}
            >
              Contacts
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Navigation;