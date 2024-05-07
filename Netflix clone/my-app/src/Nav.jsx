import React, { useEffect, useState } from 'react'
import './Nav.css'
import Image from "./Image/logo.png"
import {  useNavigate } from 'react-router-dom';
function Nav() {
  const[Show,handleShow]=useState(false);
  const navigate=useNavigate();
  const transitionNavBar=()=>{
    if(window.scrollY>100){
      handleShow(true);
    }else{
handleShow(false);

    }
      
  }
  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return ()=> window.removeEventListener("scroll",transitionNavBar);
  },[])
  return (
   
   <div className={`nav ${Show && 'nav__black'}`}>
    <div className="nav__contents">
   <img
   className='nav__logo'
   
   src={Image} alt="" />
   <img
   onClick={()=>navigate('./profile')}
   className='nav__avatar'
   
   src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
   
   </div>
   </div>
  )
}

export default Nav