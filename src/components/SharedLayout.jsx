import Header from 'components/Header/Header';
// import Footer from 'components/Footer/Footer';
// import MainContainer from 'components/MainContainer/MainContainer';

import { Outlet } from 'react-router-dom';

//-----------------------------------------------------//
export default function SharedLayout() {
  return (
    <>
      <Header />
      {/* <Footer /> */}
      <Outlet />
      {/* <MainContainer> */}
      {/* </MainContainer> */}
    </>
  );
}
