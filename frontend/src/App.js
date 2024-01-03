import './App.css';
import { BrowserRouter,  Route,  Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ActivationPage from './pages/ActivationPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path="/activation/:activation_token" 
      element= {<ActivationPage />} />
    </Routes>

    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </BrowserRouter>
  );
}

export default App;
