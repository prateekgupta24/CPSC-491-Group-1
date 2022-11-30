import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from "./pages/home";
import Login from "./pages/login";
import Subscribe from "./pages/subscribe";
import UserProfile from "./pages/userprofile";
import Signup from "./pages/signup";
import UserPreferences from "./pages/userpreferences";
import YelperHome from "./pages/yelperhome";
import YelperDetails from "./pages/yelperdetails";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userpreferences" element={<UserPreferences />} />
          <Route path="/yelperhome" element={<YelperHome />} />
          <Route path="/yelperdetails" element={<YelperDetails />} /> 
        </Routes>
    </Router>
  );
}

export default App;
