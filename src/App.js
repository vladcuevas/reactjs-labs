import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
// end react bootstrap

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'

import Login from './containers/Login/Login';
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
          <Header className="text-center" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
