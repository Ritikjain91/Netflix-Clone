import React, { useState } from 'react';
import './LoginScreen.css';
import Image from '../Image/logo.png';
import SignUpScreen from './SignUpScreen.jsx'; 

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src={Image} alt="Netflix Logo" />
              
                    <button onClick={() => setSignIn(true)} className='loginScreen__button'>
                        Sign Up
                    </button>
               
                <div className="loginScreen__gradient"/>
                <div className="loginScreen__body">
                    {!signIn ? (
                          <SignUpScreen />
                       
                    ) : (
                      
                        <>
                        <h1>Unlimited files, TV Programs, and more.</h1>
                        <h2>Watch Anywhere. Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                        <div className="loginScreen__input">
                            <form>
                                <input type="email" placeholder='Email Address' />
                                <button className="loginScreen__getStarted">
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
