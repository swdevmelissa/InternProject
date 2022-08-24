import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../pages/Login/LoginPage'
import DashboardPage from '../pages/dashboard/dashboardScreens/DashboardPage'
import  Header  from '../main/components/MainNavigation';
import RegisterPage from '../pages/register/RegisterPage';
import Footer from '../main/components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <AppNavigate />
      <Header/>
      <main>
        <Routes>
          <Route path="/dashboard"  element={<PrivateRoute><DashboardPage/></PrivateRoute>}  />
          <Route path="/login" element={<PrivateRoute isPageLogin><Login /></PrivateRoute>} />
          <Route path='/register' element={<RegisterPage />}/>
         </Routes>
      </main>
      <Footer /> 
     </BrowserRouter>
  );
};

export default App;
