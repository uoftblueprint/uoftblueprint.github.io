import React from 'react';
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems"
import banner from '../assets/banner.png'
import "./NavBar.css"

class NavBar extends React.Component {
    render() {
        return(
            <nav className="NavBarItems">
                <a className="navbar-logo" href="/home"><img src={banner} id="logo" /></a>
                <div className="menu-icon">
                </div>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })} 
                </ul>
            </nav>

        )
    }
}

export default NavBar