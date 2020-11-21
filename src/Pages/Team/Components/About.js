import React from 'react';
import {Image} from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
// import photo from "https://via.placeholder.com/100";
import 'bootstrap/dist/css/bootstrap.min.css';



const About = (props) => {
    return (
      <div class="container">
        <Image src={props.profile_img} roundedCircle fluid/>
        <h4>name</h4>
        <p>hello</p>
      </div>
    )
}

export default About;