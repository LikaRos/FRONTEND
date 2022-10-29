import React from 'react';

import styles from './Header.module.css';
import Logo from '../Logo/logo';
import Navigaton from '../Navigation/navigation';
import UserEmailName from '../UserEmailName/userEmailName';

//-------------------------------------------------------//
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.navigaton}>
          <Navigaton />
          <UserEmailName />
        </div>
      </div>
    </header>
  );
}
