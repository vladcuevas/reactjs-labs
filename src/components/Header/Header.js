import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"
import { useStateValue } from '../../StateProvider'

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// end react bootstrap

function Header() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header__logo">
                    <LocalPharmacyIcon className="header__logoImage" fontSize="large" />
                    <h2 className="header__logoTitle">E-Health</h2>
                </div>
            </Link>


            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <div className="nav__item">
                        <span className="nav__itemLineOne">Hello Guest</span>
                        <span className="nav__itemLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/admin/login" style={{ textDecoration: "none" }}>
                    <div className="nav__item">
                        <span className="nav__itemLineOne">Admin</span>
                        <span className="nav__itemLineTwo">Portal</span>
                    </div>
                </Link>
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="nav__itemBasket">
                        <ShoppingBasketIcon />
                        <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header