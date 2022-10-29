import React from 'react';

import styles from './header.module.css';
import Logo from '../../components/Logo/logo';
import  Navigaton  from '../../components/Navigation/navigation';
import Logout from '../../components/Loguot/logout';
import UserEmailName from '../../components/UserEmailName/userEmailName';

 //-------------------------------------------------------//
 export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
				<Logo />
				<Navigaton/>
				<UserEmailName/>
				<Logout />
      </div>
    </header>
  );
};