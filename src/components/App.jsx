import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import MainPage from 'pages/MainPage/MainPage';
import { QuestionPage } from 'pages/QuestionPage/QuestionPage';

import PageNotFound from '../pages/NotFoundPage/PageNotFound';
// import SharedLayout from './SharedLayout';
// import MainPage from '../pages/MainPage/MainPage';
// import Header from '../components/Header/Header';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { PublicRoute } from '../components/PublicRoute/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//---------------------------------------------------------------//
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="auth" element={<AuthPage />} />
          <Route path="home" element={<MainPage />} />
          <Route path="question" element={<QuestionPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* </Routes> */}

        {/* <Route path="/" element={<SharedLayout />}>
				</Route> */}
        {/* <Route index element={<MainPage />} /> */}

        {/* <Route index element={<LoginPage />} />


          <Route
            path="/auth"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/test"
            element={
              <PrivateRoute>
                <QuestionPage />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/materials"
            element={
              <PrivateRoute>
                <MaterialsPage />
              </PrivateRoute>
            }
          /> */}
        {/* <Route
            path="/contacts"
            element={
              <PublicRoute>
                <ContactsPage />
              </PublicRoute>
            }
          /> */}
      </Routes>
      <ToastContainer />
    </>
  );
};
