import React from 'react';
import { MenuItems } from "./MenuItems"
import banner from '../assets/banner.png'
import "./NavBar.css"

class NavBar extends React.Component {

    render() {
        return(
            <nav className="NavBarItems">
                <a className="navbar-logo" href="./index.html"><img src={banner} id="logo" /></a>
                <div className="menu-icon">
                </div>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })} 
                </ul>
            </nav>

        )
    }
}

export default NavBar