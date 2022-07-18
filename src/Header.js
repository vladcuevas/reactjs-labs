import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SearchIcon from '@mui/icons-material/Search';

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
// end react bootstrap

function Header() {
    return (
        <Container className='header'>
            <Row>
                <Col md={4}>
                    <div className="header__logo">
                        <LocalPharmacyIcon fontSize='large' className='header__logoImage' />
                        <h2 className='header__logoTitle'>E-Health</h2>
                    </div>
                </Col>
                <Col md={4}>
                <div className="header__search">
                    <input type="text" className='header__searchInput' />
                    <SearchIcon className='header__searchIcon' />
                </div>
                </Col>
                <Col md={4}>
                    <Row className="header__nav h-auto">
                        <Col md={4} className="nav__item">
                            <Col md={2} className="nav__itemLineOne">Hello Guest</Col>
                            <Col md={2} className="nav__itemLineTwo">Sign In</Col>
                        </Col>
                        <Col md={4} className="nav__item">
                            <span className="nav__itemLineOne">Your</span>
                            <span className="nav__itemLineTwo"> Shop</span>
                        </Col>
                        <Col md={4} className="nav__item">
                            <ShoppingBasketIcon className='itemBasket' />
                            <span className="nav__itemLineTwo nav__basketCount">0</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header