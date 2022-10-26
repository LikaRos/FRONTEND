import React from 'react';
import { Icons } from '../../components/Icons/icons';
import styles from './logout.module.css';
const Logout = () => {
	return (
    <button className={styles.button}>
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

