// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import {
//   Navigate,
//   Route,
//   Routes,
//   useNavigate,
//   useSearchParams,
// } from 'react-router-dom';
// import Header from '../pages/Header/header';
import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';
import { AuthPage } from '../pages/AuthPage/AuthPage';
//---------------------------------------------------------------//
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </>
  );
};
