// import React from 'react';
// import Avatar from 'react-avatar';
// import { useDispatch, useSelector } from 'react-redux';
import styles from './UserEmailName.module.css';
// import { logOut } from 'redux/auth/auth-operations';

import Logout from 'components/Loguot/logout';

// import { getIsLogged, getUserEmail } from 'redux/auth/auth-selectors';

const UserEmailName = () => {
  // const dispath = useDispatch();
  // const isLogged = useSelector(getIsLogged);
  // const email = useSelector(getUserEmail);

  // const handlerLogOut = () => {
  //   // dispath(logOut());
  // };

  return (
    // isLogged && (
    <div className={styles.wrapper}>
      <div className={styles.usr_data}>
        <p className={styles.avatar}>D</p>
        <p className={styles.text}>email</p>
        {/* <p className={styles.text}>{email}</p> */}
      </div>
      <Logout />
    </div>
    // )
  );
};

export default UserEmailName;
