import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { MenuItems } from "./MenuItems"
import banner from '../assets/banner.png'
import "./NavBar.css"

class NavigationBar extends React.Component {
    render() {
        return(
            <Navbar>
                <Navbar.Brand href="/home">
                <img
                    alt=""
                    src={banner}
                    className="navbar-logo d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" style={{ paddingTop: '8px' }}>
                    <Nav className="ml-auto">
                        <Nav.Link className="navlink" href="/team">Team</Nav.Link>
                        <Nav.Link className="navlink" href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            // <nav className="NavBarItems">
            //     <a className="navbar-logo" href="/home"><img src={banner} id="logo" /></a>
            //     <div className="menu-icon">
            //     </div>
            //     {window.innerWidth < 480 ? (
            //         <ul className='mobile-nav-menu'>
            //         {MenuItems.map((item, index) => {
            //             return (
            //                 <li key={index}>
            //                     <Link className={item.cName} to={item.url}>
            //                     {item.title}
            //                     </Link>
            //                 </li>
            //             )
            //         })} 
            //     </ul>
            //     ) : (
            //     <ul className='nav-menu'>
            //         {MenuItems.map((item, index) => {
            //             return (
            //                 <li key={index}>
            //                     <Link className={item.cName} to={item.url}>
            //                     {item.title}
            //                     </Link>
            //                 </li>
            //             )
            //         })} 
            //     </ul>
            //     )}
            // </nav>

        )
    }
}

export default NavigationBar;