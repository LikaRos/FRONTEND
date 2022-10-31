import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { AuthPage } from '../pages/AuthPage/AuthPage';
// import SharedLayout from './SharedLayout';
import MainPage from '../pages/MainPage/MainPage';
import QuestionPage from 'pages/QuestionPage/QuestionPage';
// import Header from '../components/Header/Header';

//---------------------------------------------------------------//
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/question" element={<QuestionPage />} />
        </Route>

        {/* <Route path="/" element={<SharedLayout />}>
				</Route> 
      

     
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
          />
					  </Route>  */}
      </Routes>
    </>
  );
};
