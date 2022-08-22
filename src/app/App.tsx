import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../pages/Login/LoginPage'
import DashboardPage from '../pages/dashboard/DashboardPage'
import  Header  from '../main/components/MainNavigation';
import RegisterPage from '../pages/register/RegisterPage'


const App = () => {
  return (
    <BrowserRouter>
      <AppNavigate />
      <Header />
  
      <Routes>
        <Route path="/home"  element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute isPageLogin><Login /></PrivateRoute>} />
        <Route path='/register' element={<PrivateRoute><RegisterPage/></PrivateRoute>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
