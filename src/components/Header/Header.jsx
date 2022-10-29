import React from 'react';

import styles from './Header.module.css';
import Logo from '../Logo/logo';
import Navigaton from '../Navigation/navigation';
import Logout from '../Loguot/logout';
import UserEmailName from '../UserEmailName/userEmailName';

//-------------------------------------------------------//
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navigaton />
        <UserEmailName />
        <Logout />
      </div>
    </header>
  );
}
