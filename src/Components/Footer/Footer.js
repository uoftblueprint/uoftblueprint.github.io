import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner_negative.png';

const Footer = () => (
  <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <Link className="logo" to="/">
            <img src={banner} id="logo" style={{ padding: '4px' }} alt="Blueprint Logo" />
          </Link>
        </div>
        {/* Column2 */}
        <div className="col">
          <h4>operations</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="/projects" style={{ color: '#FFF' }}>
                projects
              </Link>
            </li>
            <li>
              <Link to="/apply/nonprofits" style={{ color: '#FFF' }}>
                partner
              </Link>
            </li>
          </ul>
        </div>
        {/* Column3 */}
        <div className="col">
          <h4>team</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="/team" style={{ color: '#FFF' }}>
                current
              </Link>
            </li>
            <li>
              <Link to="/apply/students" style={{ color: '#FFF' }}>
                join
              </Link>
            </li>

          </ul>
        </div>
        {/* Column4 */}
        <div className="col">
          <h4>say hello</h4>
          <ul className="list-unstyled">
            <li>
              <a target="_blank" href="https://facebook.com/uoftblueprint" style={{ color: '#FFF' }} rel="noreferrer">
                facebook
              </a>
            </li>
            <li>
              <a target="_blank" href="https://instagram.com/uoftblueprint" style={{ color: '#FFF' }} rel="noreferrer">
                instagram
              </a>
            </li>
            {/* <li><a target="_blank" href="" style={{ color: '#FFF' }}>
                                twitter
                                </a>
                                </li>  */}
            <li>
              <a target="_blank" href="https://linkedin.com/company/uoftblueprint" style={{ color: '#FFF' }} rel="noreferrer">
                linkedin
              </a>
            </li>
            {/* <li><a target="_blank" href="" style={{ color: '#FFF' }}>
                                medium
                                </a>
                                </li> */}
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h5 className="col-sm">
          &copy; Blueprint 2020.
        </h5>
      </div>
    </div>
  </div>
);

export default Footer;
