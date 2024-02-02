import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Navbars from './Navbar/Navbars';
import { Button } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
function App() {
  return (
    <>
      <Navbars />
      <Profile />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
