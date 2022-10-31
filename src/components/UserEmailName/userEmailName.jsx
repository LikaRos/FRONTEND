import styles from './UserEmailName.module.css';

import Logout from 'components/Loguot/logout';
import { useMediaQuery } from 'usehooks-ts';

const UserEmailName = () => {
  const matches = useMediaQuery('(min-width:768px)');
  return (
    <div className={styles.wrapper}>
      <div className={styles.usr_data}>
        <p className={styles.avatar}>D</p>
        <p className={styles.text}>email</p>
      </div>
      {matches && <Logout />}
    </div>
  );
};

export default UserEmailName;
