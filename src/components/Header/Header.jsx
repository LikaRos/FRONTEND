import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Header.module.css';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/navigation';
import UserEmailName from '../UserEmailName/userEmailName';
import { getIsLoggedIn } from '../../redux/Auth/auth-selector';
import NoLoginNav from 'components/Navigation/NoLoginNav/NoLoginNav';

//-------------------------------------------------------//
export default function Header() {
  const isLogin = useSelector(getIsLoggedIn);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.navigaton}>
					{isLogin && <Navigation />}
        	{isLogin && <UserEmailName />}
        	{!isLogin && <NoLoginNav />}
        </div>
      </div>
    </header>
  );
}
