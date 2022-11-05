import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import MainPage from 'pages/MainPage/MainPage';
import { QuestionPage } from 'pages/QuestionPage/QuestionPage';
// import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { PublicRoute } from '../components/PublicRoute/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';

const UserMaterialsLazyPage = lazy(() => import("../pages/UserMaterialsPage"));
const ContactsLazyPage = lazy(() => import("../pages/ContactsPage"));

//---------------------------------------------------------------//
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
            path="/materials"
            element={
              <Suspense fallback={"Loading ..."}>
                <UserMaterialsLazyPage />
              </Suspense> 
            }
          />
          <Route  
            path="/contacts"
            element={
              <Suspense fallback={"Loading ..."}>
                <ContactsLazyPage />
              </Suspense> 
            }
          />
          {/* <Route
            path="/materials"
            element={
              <PrivateRoute>
                <UserMaterialsLazyPage />
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
          {/* <Route path="/contacts" element={<ContactsPage />} /> */}
          
        </Route>
      </Routes>
    </>
  );
};
