import React from 'react';
import {Image} from "react-bootstrap";
import photo from "../Images/stock-photo.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
      <div class="container">
        <Image src={photo} roundedCircle fluid/>
        <h3>name</h3>
        <h3>hello</h3>
      </div>
    )
}

export default About;