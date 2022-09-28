import React from 'react';
// import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import NavBar from './navbar';
import Faq from './pages/faq';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
    <Router>
        <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
    </Router>  
    </div>
  );
}

export default App;