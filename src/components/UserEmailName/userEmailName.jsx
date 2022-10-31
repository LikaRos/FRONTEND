import styles from './UserEmailName.module.css';


import Logout from 'components/Loguot/logout';

const UserEmailName = () => {
	
  return (
    <div className={styles.wrapper}>
      <div className={styles.usr_data}>
        <p className={styles.avatar}>D</p>
        <p className={styles.text}>email</p>
      </div>
      <Logout />
    </div>

  );
};

export default UserEmailName;
