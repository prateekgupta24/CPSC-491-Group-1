import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Links} from './styles/navbar.style.js';

const NavBar = () => {
  return (
    <Navbar>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link >
        <Link to="/faq">Faq</Link >
        <Link to="/about">About Us</Link >
        <Link to="/contact">Contact Us</Link >
      </Links>
    </Navbar>
  );
}
export default NavBar;