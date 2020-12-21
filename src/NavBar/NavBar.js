import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { MenuItems } from "./MenuItems"
import banner from '../assets/banner.png'
import "./NavBar.css"

class NavigationBar extends React.Component {
    render() {
        return(
            <Navbar>
                <Navbar.Brand href="/">
                <img
                    alt=""
                    src={banner}
                    className="navbar-logo d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" style={{ paddingTop: '8px' }}>
                    {window.innerWidth < 480 ? (
                         <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/team">Team</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/chapters">Chapters</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/projects">Projects</Link>
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    ) : (
                        <Nav className="ml-auto">
                            <Link className="navlink" to="/team">Team</Link>
                            <Link className="navlink" to="/chapters">Chapters</Link>
                            <Link className="navlink" to="/projects">Projects</Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;