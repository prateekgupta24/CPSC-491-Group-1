import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Subscribe from "./pages/subscribe";
import UserProfile from "./pages/userprofile";
import Signup from "./pages/signup";
import UserPreferences from "./pages/userpreferences";

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
      </Routes>
    </Router>
  );
}

export default App;
