import Appear from 'components/common/Appear';
import UserMaterials from 'components/UserMaterials';
import {Modal} from '../../components/AuthForm/AuthModal'
import s from './UserMaterialsPage.module.css';

const UserMaterialsPage = () => {
  return (
    <Appear time={600}>
    <div className={s.container}>
        <UserMaterials />
        {/* <Modal/> */}
    </div>
    </Appear>
  );
};

UserMaterialsPage.propTypes = {};

export default UserMaterialsPage;
