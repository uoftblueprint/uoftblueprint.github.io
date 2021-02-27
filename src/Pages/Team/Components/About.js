import React from 'react';
import {
  Image, Container, Row, Col,
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Team.css';

const About = (props) => (
  <div className="AboutContainer">
    <a href={props.linkedin} target="_blank">
      <Image
        className="ProfileImage"
        src={props.profile_img}
        roundedCircle
        fluid
      />
    </a>
    <h5 className="ProfileName">{props.name}</h5>
    <p className="Role">{props.role}</p>
  </div>
);

export default About;
