import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navleft, Navright, Links } from "./styles/navbar.style.js";
import Button from "@mui/material/Button/";

const NavBar = () => {
  //const user = localStorage.getItem("user");

  //const [logged, setLogged] = useState(false);
  //setLogged(false); // why does this break the website?

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

        <Button variant="contained" style={{ padding: "0px", margin: "5px" }}>
          <Link style={{ color: "black", textDecoration: "none" }} to="/login">
            <Links>SIGN IN</Links>
          </Link>
        </Button>
      </Navright>
    </Nav>
  );
};
export default NavBar;
