import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../pages/Login/LoginPage'
import DashboardPage from '../pages/dashboard/DashboardPage'
import  Header  from '../main/components/MainNavigation';
import RegisterPage from '../pages/register/RegisterPage';
import { Container } from 'react-bootstrap';
import Footer from '../main/components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <AppNavigate />
      <div>
      <Header />
      <main className='py-3'>
        <Container>
          <h1> welcome page</h1>
        </Container>
      </main>
      <Footer />
      </div>

      <Routes>
        <Route path="/home"  element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute isPageLogin><Login /></PrivateRoute>} />
        <Route path='/register' element={<RegisterPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
