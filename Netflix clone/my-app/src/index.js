import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './features/userSlice'; 
import ProfileScreen from './Screen/ProfileScreen';
import LoginScreen from './Screen/LoginScreen';
import HomeScreen from './Screen/HomeScreen';


const store = createStore(rootReducer);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homescreen/profile" element={<ProfileScreen/>} />
        <Route path="/homescreen/profile/:id" element={<ProfileScreen/>} />
        <Route path="/profile" element={<ProfileScreen/>} />
        <Route exact path="/loginScreen" element={<LoginScreen/>} />
        <Route path='/homescreen' element={<HomeScreen/>}/>

      </Routes>
    </BrowserRouter>
  </Provider>,

);

