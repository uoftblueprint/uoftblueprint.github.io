import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { MenuItems } from "./MenuItems";
import logo from "../../assets/banner-crop.png";
import title from "../../assets/banner-text.png";
import "./NavBar.css";

function NavigationBar() {
  return (
    <Navbar expand='lg'>
      <Navbar.Brand href='/' className='banner'>
        <img alt='' src={logo} className='navbar-logo d-inline-block align-top' />{' '}
        <img alt='' src={title} className='navbar-title d-inline-block align-top' />{' '}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='ml-auto'>
          <Link className='navlink' to='/team'>
            Team
          </Link>
          <Link className='navlink' to='/chapters'>
            Chapters
          </Link>
          <Link className='navlink' to='/projects'>
            Projects
          </Link>
          <Link className='navlink' to='/apply'>
            Apply
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
