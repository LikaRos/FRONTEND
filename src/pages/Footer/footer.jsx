import { NavLink } from 'react-router-dom';
import styles from './footer.module.css';
import { Icons } from '../../components/Icons/icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
				<p className={styles.text}>&copy 2021 | All Rights Reserved | Developed with
					<Icons
						className=""
						name="logo"
						color="#FF6B09"
						width="16"
						height="16"
					>
					</Icons>
					by
				</p>
				<NavLink
					className={styles.link}>
					GoIT Students
				</NavLink>
      </div>
    </footer>
  );
}