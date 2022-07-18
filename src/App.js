import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './Footer/Footer';
import Login from './containers/Login/Login';
import Navbar from './components/Navbar';
import Header from './Header';

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
          <Row>
            <Col md={3}>
              Hello, Bootstrap!
            </Col>
            <Col md={3}>
              Hello, Bootstrap!
            </Col>
            <Col md={3}>
              Hello, Bootstrap!
            </Col>
            <Col md={3}>
              Hello, Bootstrap!
            </Col>
          </Row>
        </Container>
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
