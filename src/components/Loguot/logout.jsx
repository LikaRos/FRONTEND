import React from 'react';
import { Icons } from '../../components/Icons/icons';
import styles from './logout.module.css';
import { logOut } from '../../redux/Auth/auth-operations';
import { useDispatch } from 'react-redux';
// import { useMediaQuery } from 'usehooks-ts';

const Logout = ({ isHere }) => {
  const dispath = useDispatch();

  const handlerLogOut = () => {
    dispath(logOut());
  };

  // const matches = useMediaQuery('(min-width:600px)');
  // console.log(matches);

  return (
    <button
      // className={styles.button}
      // className={`${styles.button} ${styles.isHere}`}
      className={styles.isHere}
      type="button"
      onClick={handlerLogOut}
    >
      <Icons
        name="logout"
        className=""
        color="#000000"
        width="16"
        height="16"
      />
    </button>
  );
};

export default Logout;
