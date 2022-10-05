import React from 'react';
// import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Subscribe from './pages/subscribe';
import UserProfile from './pages/userprofile';
import NavBar from './navbar';



function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
    </Router>  
  );
}

export default App;