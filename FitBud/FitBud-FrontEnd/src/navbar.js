import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navleft, Navright, Links} from './styles/navbar.style.js';
import Button from '@mui/material/Button/';
import {HashLink} from 'react-router-hash-link';

const NavBar = () => {
  return (
    <Nav>
      <Navleft>
        <Button variant="outlined" style={{padding:"0px", margin: "5px"}}>
          <Links><HashLink to="/#">Home</HashLink></Links>
        </Button>

        <Button variant="outlined" style={{padding:"0px", margin: "5px"}}>
          <Links><HashLink to="/#about">About Us</HashLink></Links>
        </Button>


        <Button variant="outlined" style={{padding:"0px", margin: "5px"}}>
          <Links><HashLink to="/#faq">FAQ</HashLink></Links>
        </Button>


        <Button variant="outlined" style={{padding:"0px", margin: "5px"}}>
          <Links><HashLink to="/#contact">Contact Us</HashLink></Links>
        </Button>
      </Navleft>

      <Navright>
        <Button variant="contained" style={{padding:"0px", margin: "5px"}}><Links>
        <Link to="/subscribe">Subscribe</Link></Links>
        </Button>
        <Button variant="contained" style={{padding: "0px", margin: "5px"}}>
          <Links><Link style={{color: 'black', textDecoration:'none'  }} to="/login">Login/Register</Link ></Links>
        </Button>
      </Navright>
    </Nav>
  );
}
export default NavBar;