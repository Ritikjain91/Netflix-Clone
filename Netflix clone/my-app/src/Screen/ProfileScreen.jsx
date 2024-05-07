import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigate('/loginScreen');
    }).catch((error) => {
      console.log(error.message);
    });
  };

  const handleSubscribe = () => {
   
    alert('Subscribed successfully!');
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            className="profileScreen__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar"
          />
          <div className="profileScreen__details">
            <h2 >{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans:</h3>
              <ul>
                <li>Basic Plan - $9.99/month</li>
                <li>Premium Plan - $15.99/month</li>
             
              </ul>
              <button onClick={handleSubscribe} className='profileScreen__subscribe'>Subscribe</button>
              <button onClick={handleSignOut} className='profileScreen__signOut'>Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
