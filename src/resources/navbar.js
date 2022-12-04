import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navleft, Navright, Links } from "../styles/navbar.style.js";
import Button from "@mui/material/Button/";
//import axios from "axios";

const NavBar = () => {
  function handleLogOut() {
    // set auth to false
    //localStorage.clear();
    // axios
    //   .get("http://localhost:8080/logout", data)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return;
    //   });
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
<<<<<<< HEAD:src/resources/navbar.js
            onClick={handleLogOut}
          >
            <Links>SIGN OUT</Links>
=======
            to="/yelperhome"
          >
            <Links>Yelper</Links>
          </Link>
        </Button>

        <Button variant="contained" style={{ padding: "0px", margin: "5px" }}>
          <Link style={{ color: "black", textDecoration: "none" }} to="/login">
            <Links>SIGN IN</Links>
>>>>>>> 2825b87d89ce5953760368829e7e91c65a0430e2:src/navbar.js
          </Link>
        </Button>
      </Navright>
    </Nav>
  );
};

export default NavBar;
