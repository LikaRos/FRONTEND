import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import MainPage from 'pages/MainPage/MainPage';
import { QuestionPage } from 'pages/QuestionPage/QuestionPage';

// import MainPage from '../pages/MainPage/MainPage';
// import Header from '../components/Header/Header';
import {PublicRoute} from '../components/PublicRoute/PublicRoute';
import {PrivateRoute} from '../components/PrivateRoute/PrivateRoute';

//---------------------------------------------------------------//
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="auth" element={<AuthPage />} />
          <Route path="home" element={<MainPage />} />
          <Route path="question" element={<QuestionPage />} /> */}
          <Route
            path="/auth"
            element={
              <PublicRoute >
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute >
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/question"
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
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          /> */}
        </Route>
        {/* </Routes> */}
      </Routes>
    </>
  );
};
