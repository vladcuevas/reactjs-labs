import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"
import { useStateValue } from '../../StateProvider'

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
// end react bootstrap

function Header() {
    const [{basket}, dispatch] = useStateValue()

    return (
        <Container className='header' >
            <Row>
                <Col md={3}>
                    <Link to="/" style={{ textDecoration: "none"}}>
                        <div className="header__logo">
                            <LocalPharmacyIcon fontSize='large' className='header__logoImage' />
                            <h2 className='header__logoTitle'>E-Health</h2>
                        </div>
                    </Link>
                </Col>
                <Col md={3} className="w-50">
                <div className="header__search">
                    <input type="text" className='header__searchInput' />
                    <SearchIcon className='header__searchIcon' />
                </div>
                </Col>
                <Col md={3}>
                    <Row className="header__nav h-auto">
                        <Col className="nav__item">
                            <Col className="nav__itemLineOne">Hello Guest</Col>
                            <Col className="nav__itemLineTwo">Sign In</Col>
                        </Col>
                        <Col className="nav__item">
                            <span className="nav__itemLineOne">Your</span>
                            <span className="nav__itemLineTwo"> Shop</span>
                        </Col>
                        <Col className="nav__itemBasket">
                            <Link to="/checkout" style={{ textDecoration: 'none' }}>
                                    <ShoppingBasketIcon/>
                                    <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header