import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Header.module.css';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/navigation';
import UserEmailName from '../UserEmailName/userEmailName';
import { getIsLoggedIn } from '../../redux/Auth/auth-selector';
import NoLoginNav from 'components/Navigation/NoLoginNav/NoLoginNav';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import { useState } from 'react';

//-------------------------------------------------------//
export default function Header() {
  const [isActive, setOnMenuBtn] = useState(false);

  const handlerMenu = () => {
    setOnMenuBtn(!isActive);
  };
  // const isLogin = useSelector(getIsLoggedIn);
  const isLogin = true;
  console.log(isLogin);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.navigaton}>
          {isLogin && <Navigation isActive={isActive} />}
          {isLogin && <UserEmailName />}
          {!isLogin && <NoLoginNav />}
          <BurgerMenu handlerMenu={handlerMenu} isActive={isActive} />
        </div>
      </div>
    </header>
  );
}
