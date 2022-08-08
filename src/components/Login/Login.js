import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import {
    Routes,
    Route,
} from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';

function Login() {

    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">E-Health</h2>
                </div>
            </Link>
            <Routes>
                <Route path="user" element={<UserLogin />} />
                <Route path="admin" element={<AdminLogin />} />
                <Route path="logout" element={<AdminLogin />} />
            </Routes>
        </div>
    )
}

export default Login;