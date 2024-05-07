import { Link } from 'react-router-dom';
import './App.css';


import LoginScreen from './Screen/LoginScreen'; 
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'; 


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(); 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]); 

  return (
    <div className="app">
       
      {!user ? (
        <LoginScreen /> 
      
      ) : (
        <>
         
          <Link to='/'> 
         
          </Link>
          <Link to='/homescreen/profile'> 
     
         
          </Link>
          <Link to='/profile'> 
     
         
     </Link>
        </>
      )}
    </div>
  );
}

export default App;
