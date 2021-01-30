import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { MenuItems } from "./MenuItems"
import logo from '../../assets/banner-crop.png'
import title from '../../assets/banner-text.png'
import "./NavBar.css"
import { getByTitle } from '@testing-library/react';

class NavigationBar extends React.Component {
    render() {
        return(
            <Navbar>
                <Navbar.Brand href="/" className="banner">
                <img
                    alt=""
                    src={logo}
                    className="navbar-logo d-inline-block align-top"
                />{' '}
                 <img
                    alt=""
                    src={title}
                    className="navbar-title d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Navbar.Toggle />
                {window.innerWidth < 480 ? (
                    <Navbar.Collapse style={{ paddingTop: '10px', paddingLeft: '6em' }}>
                        <NavDropdown title="☰" id="basic-nav-dropdown" style={{ marginLeft: '-6em' }}>
                                <NavDropdown.Item>
                                    <Link to="/team">Team</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/chapters">Chapters</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/projects">Projects</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/apply">Apply</Link>
                                </NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                    </Navbar.Collapse>
                         
                    ) : (
                        <Navbar.Collapse className="justify-content-end" style={{ paddingTop: '8px' }}>
                            <Nav className="ml-auto">
                                <Link className="navlink" to="/team">Team</Link>
                                <Link className="navlink" to="/chapters">Chapters</Link>
                                <Link className="navlink" to="/projects">Projects</Link>
                                <Link className="navlink" to="/apply">Apply</Link>
                            </Nav>
                        </Navbar.Collapse>
                    )}
                
            </Navbar>
        )
    }
}

export default NavigationBar;