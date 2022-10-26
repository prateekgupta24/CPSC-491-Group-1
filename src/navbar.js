import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navleft, Navright, Links } from "./styles/navbar.style.js";
import Button from "@mui/material/Button/";

const NavBar = () => {
  const navigate = useNavigate();
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
        <Button
          onClick={() => {
            navigate("/userprofile");
          }}
          variant="contained"
          style={{ padding: "0px", margin: "5px" }}
        >
          <Links>Profile</Links>
        </Button>
        <Button
          onClick={() => {
            navigate("/login");
          }}
          variant="contained"
          style={{ padding: "0px", margin: "5px" }}
        >
          <Links>Login</Links>
        </Button>
      </Navright>
    </Nav>
  );
};
export default NavBar;
