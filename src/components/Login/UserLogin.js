import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

function UserLogin() {

    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
            if (auth) {
                navigate('/');
            }
        })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the E-Health Website Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button className='login__registerButton' onClick={register}>Create your eShop Account</button>
        </div>
    )
}

export default UserLogin