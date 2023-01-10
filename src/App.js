import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/adminLogin';
import UserLogin from './Components/UserLogin';
import AdminHomePage from './Components/adminHomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/adminLogin' element={<AdminLogin />}></Route>
          <Route path='/userLogin' element={<UserLogin />}></Route>
          <Route path='/adminHomePage/*' element={<AdminHomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
