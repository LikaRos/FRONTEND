// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import {
  //   Navigate,
  Route,
  Routes,
  //   useNavigate,
  //   useSearchParams,
} from 'react-router-dom';
// import Footer from './Footer/Footer';
// import Header from './Header/Header';
// import Header from '../pages/Header/header';
import MainPage from '../pages/MainPage/MainPage';
import SharedLayout from './SharedLayout';

//---------------------------------------------------------------//
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<MainPage />} /> */}

          {/* <Route index element={<LoginPage />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/home">
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/home">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <MainPage />{' '}
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
          <Route
            path="/result"
            element={
              <PrivateRoute>
                <ResultPage />
              </PrivateRoute>
            }
          />
          <Route
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
      </Routes>
    </>
  );
};
