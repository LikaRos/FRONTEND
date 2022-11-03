import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import { QuestionPage } from 'pages/QuestionPage/QuestionPage';
import MainPage from '../pages/MainPage/MainPage';
import { Result } from 'pages/Result/Result';

//---------------------------------------------------------------//
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/test" element={<QuestionPage />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </>
  );
};
