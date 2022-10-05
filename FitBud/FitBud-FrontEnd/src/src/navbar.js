import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navleft, Navright, Links} from './styles/navbar.style.js';
import Button from '@mui/material/Button/';

const NavBar = () => {
  return (
    <Nav>
      <Navleft>
        <Button variant="outlined" style={{padding:"0px", margin: "5px"}}>
          <Links><Link style={{color: 'black', textDecoration:'none'}} to="/#">Home</Link></Links>
        </Button>

        <Button variant="outlined" style={{padding:"0px", margin: "5px"}}>
          <Links><Link style={{color: 'black', textDecoration:'none'}} to="/#about">About Us</Link></Links>
        </Button>


        <Button variant="outlined" style={{padding:"0px", margin: "5px"}}>
          <Links><Link style={{color: 'black', textDecoration:'none'}} to="/#faq">FAQ</Link></Links>
        </Button>


        <Button variant="outlined" style={{padding:"0px", margin: "5px"}}>
          <Links><Link style={{color: 'black', textDecoration:'none'}} to="/#contact">Contact Us</Link></Links>
        </Button>

      </Navleft>
      <Navright>
        <Button variant="contained" style={{padding:"0px", margin: "5px"}}><Links>
        <Link style={{color: 'black', textDecoration:'none'}} to="/subscribe">Subscribe</Link></Links>
        </Button>
        <Button variant="contained" style={{padding: "0px", margin: "5px"}}>
          <Links><Link style={{color: 'black', textDecoration:'none'  }} to="/login">Login/Register</Link ></Links>
        </Button>
      </Navright>
    </Nav>
  );
}
export default NavBar;