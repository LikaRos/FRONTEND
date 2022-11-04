import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import { PublicRoute } from '../components/PublicRoute/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';

import { AuthPage } from '../pages/AuthPage/AuthPage';
import { QuestionPage } from 'pages/QuestionPage/QuestionPage';
import MainPage from '../pages/MainPage/MainPage';
import { Result } from 'pages/Result/Result';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import PageNotFound from '../pages/NotFoundPage/PageNotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
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
          <Route
            path="/result"
            element={
              <PrivateRoute>
                <Result />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />

          {/* <Route
            path="/materials"
            element={
              <PrivateRoute>
                <MaterialsPage />
              </PrivateRoute>
            }
          /> /}
          {/ <Route
            path="/contacts"
            element={
              <PublicRoute>
                <ContactsPage />
              </PublicRoute>
            }
          /> */}
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
