import Appear from 'common/Appear';
import UserMaterials from 'components/UserMaterials';
import s from './UserMaterialsPage.module.css';

const UserMaterialsPage = () => {
  return (
    
    <Appear time={600}>
    <div className={s.container}>
        <UserMaterials />
    </div>
     </Appear>
  );
};

UserMaterialsPage.propTypes = {};

export default UserMaterialsPage;
