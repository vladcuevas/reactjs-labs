import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// end react bootstrap

import './App.css';
import Header from './components/Header/Header';
import AdminHeader from './components/Header/AdminHeader';
import Home from './components/Home/Home'
import AdminHome from './components/Home/AdminHome'

import Login from './components/Login/Login';
import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout';
import ErrorPage from './components/ErrorPage';

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// end react bootstrap

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header className="text-center" />} />
          <Route path="/admin/home" element={<AdminHeader className="text-center" />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="login/*" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;