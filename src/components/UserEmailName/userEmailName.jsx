import styles from './UserEmailName.module.css';
import { useSelector } from 'react-redux';

import { getEmail } from '../../redux/Auth/auth-selector';

import Logout from 'components/Loguot/logout';

const UserEmailName = () => {
	const userName = useSelector(getEmail);
	// const email = userName.slice(0, 6);

	const email = userName.split('@')[0];
	const emailLatter = userName.slice(0, 1).toUpperCase();
	console.log(email);
  return (
    <div className={styles.wrapper}>
      <div className={styles.usr_data}>
        <p className={styles.avatar}>{emailLatter}</p>
        <p className={styles.text}>{email}</p>
      </div>
      <Logout />
    </div>

  );
};

export default UserEmailName;
