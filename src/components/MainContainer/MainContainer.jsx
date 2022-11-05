// import styles from './MainContainer.module.css';

import s from './MainContainer.module.css';

const MainContainer = ({ children }) => {
  return <div className={s.mainContainer}>{children}</div>;
};
export default MainContainer;
