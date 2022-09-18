import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Contexts/AuthUser';
// import Account from './Components/Html/Account';
import Home from './Components/Html/Home';
import Login from './Components/Html/Login';
import Navbar from './Components/Html/Navbar';
import SignUp from './Components/Html/SignUp';
import Account from './Components/Html/Account';
import Footer from './Components/Html/Footer';

const App = () => {
  return (
    <AuthProvider>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path="/account" element={<Account />} />
    </Routes>
    <Footer />
    </AuthProvider>
  )
}



// Deploy complete!

// Project Console: https://console.firebase.google.com/project/netflix-493fd/overview
// Hosting URL: https://netflix-493fd.web.app/


export default App;