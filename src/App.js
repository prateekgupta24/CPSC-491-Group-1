import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Subscribe from "./pages/subscribe";
import UserProfile from "./pages/userprofile";
import Signup from "./pages/signup";
import UserPreferences from "./pages/userpreferences";
import { authContext } from "./services/authContext";
import Match from "./pages/match";
function App() {
  const [jwt, setJwt] = useState(false);
  return (
    <Router>
      <authContext.Provider value={{ jwt, setJwt }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userpreferences" element={<UserPreferences />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </authContext.Provider>
    </Router>
  );
}

export default App;
