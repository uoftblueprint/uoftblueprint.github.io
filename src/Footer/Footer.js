import React from 'react';
import "./Footer.css"
import banner from '../assets/banner_negative.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <a className="logo" href="/home"><img src={banner} id="logo" /></a>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>operations</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link to={'/projects'} style={{ color: '#FFF' }}>
                                project
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>team</h4>
                        <ul className="list-unstyled">
                            <li><Link to={'/team'} style={{ color: '#FFF' }}>
                                current
                                </Link></li>
                        </ul>
                    </div>
                    {/* Column4 */}
                    <div className="col">
                        <h4>say hello</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a target="_blank" href="https://www.facebook.com/uoftblueprint/" style={{ color: '#FFF' }}>
                                facebook
                                </a>
                                </li>
                            <li><a target="_blank" href="https://www.instagram.com/uoftblueprint/?hl=en" style={{ color: '#FFF' }}>
                                instagram
                                </a>
                                </li>
                            <li><a target="_blank" href="" style={{ color: '#FFF' }}>
                                twitter
                                </a>
                                </li> 
                            <li><a target="_blank" href="https://www.linkedin.com/company/uoftblueprint/?originalSubdomain=ca" style={{ color: '#FFF' }}>
                                linkedin
                                </a>
                                </li> 
                            <li><a target="_blank" href="" style={{ color: '#FFF' }}>
                                medium
                                </a>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <h5 className="col-sm">
                        &copy; Blueprint 2018.
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;