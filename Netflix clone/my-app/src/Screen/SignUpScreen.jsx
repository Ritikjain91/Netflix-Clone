
import React, { useRef } from 'react'
import "./SignUpScreen.css"
import { auth } from '../firebase.js';
import { useNavigate } from 'react-router-dom';


function SignUpScreen() {
  const emailRef=useRef(null);
  const passwordRef=useRef(null);
  const navigate = useNavigate();
  
    const register=(e)=>{
        e.preventDefault();
  
        auth.createUserWithEmailAndPassword( emailRef.current.value,
          passwordRef.current.value
  ).then((authUser)=>{
    console.log(authUser)
  }).catch((error)=>{
    alert(error.message);
  })
    }
    const signIn=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword( emailRef.current.value,
          passwordRef.current.value
  ).then((authUser)=>{
    console.log(authUser)
    navigate('/homescreen');
  }).catch((error)=>{
    alert(error.message);
  })
        
    }
  return (
  <div className="signupScreen">
    <h1>Sign in</h1>
     <form>
                                <input ref={emailRef}
                                 type="email" placeholder='Email Address' />
                                <input ref={passwordRef} type="Password" placeholder='Password' />
                                <button type='submit' onClick={signIn}>Sign in</button>
                         <h4><span className="signupScreen__gray">New to Netlflix? </span><span className="signupScreen__link" onClick={register}> Sign Up Now</span> </h4>     
                            </form>
  </div>
  )
}

export default SignUpScreen