import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navleft, Navright, Links } from "../styles/navbar.style.js";
import Button from "@mui/material/Button/";
import { authContext } from "../services/authContext";
// import axios from "axios";

const NavBar = () => {
  // const { auth, setAuth } = useContext(authContext);
  const { jwt, setJwt } = useContext(authContext);
  function handleLogOut() {
    // setAuth(false);
    setJwt("");
    localStorage.clear();
    // window.location.reload(); // refreshes page
  }

  return (
    <Nav>
      <Navleft>
        <Button
          onClick={() => {
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" });
          }}
          variant="outlined"
          style={{ padding: "0px", margin: "5px" }}
        >
          <Links>FitBud</Links>
        </Button>

        <Button
          onClick={() => {
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
          }}
          variant="outlined"
          style={{ padding: "0px", margin: "5px" }}
        >
          <Links>About Us</Links>
        </Button>

        <Button
          onClick={() => {
            document
              .getElementById("faq")
              .scrollIntoView({ behavior: "smooth" });
          }}
          variant="outlined"
          style={{ padding: "0px", margin: "5px" }}
        >
          <Links>FAQ</Links>
        </Button>

        <Button
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
          variant="outlined"
          style={{ padding: "0px", margin: "5px" }}
        >
          <Links>Contact Us</Links>
        </Button>
      </Navleft>

      <Navright>
        <Button variant="contained" style={{ padding: "0px", margin: "5px" }}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/userprofile"
          >
            <Links>Profile</Links>
          </Link>
        </Button>

        <Button variant="contained" style={{ padding: "0px", margin: "5px" }}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/userpreferences"
          >
            <Links>Preferences</Links>
          </Link>
        </Button>

        <Button variant="contained" style={{ padding: "0px", margin: "5px" }}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/yelperhome"
          >
            <Links>Yelper</Links>
          </Link>
        </Button>

        <Button
          variant="contained"
          style={{ padding: "0px", margin: "5px" }}
          onClick={handleLogOut}
        >
          <Link style={{ color: "black", textDecoration: "none" }}></Link>
          <Links>SIGN OUT</Links>
        </Button>
      </Navright>
    </Nav>
  );
};

export default NavBar;
