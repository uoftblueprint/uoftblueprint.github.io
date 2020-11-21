import React from 'react';
import {Image} from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import photo from "https://via.placeholder.com/100";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
      <div class="container">
        <Image src={photo} roundedCircle fluid/>
        <h4>name</h4>
        <h4>hello</h4>
      </div>
    )
}

export default About;