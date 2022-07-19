import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './Footer/Footer';
import Login from './containers/Login/Login';
import Footer from './Footer/Footer'

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
// end react bootstrap

function App() {
    return (
      <div className='App'>
        <Container fluid>
          <Row>
            <Header className="text-center" />
          </Row>
        </Container>
        <Home/>
        <Footer></Footer>
      </div>
    )

  // return (
  //   <>
  //   <Router>
  //     <Navbar/>
  //     <Routes>
  //       <Route path='/' exact />
  //     </Routes>
  //     <h1>My react app</h1>
  //     <Login></Login>
  //   </Router>
  //   </>
  // );
}

export default App;
