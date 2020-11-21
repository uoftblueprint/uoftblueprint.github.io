import React from 'react';
import About from "./Components/About";
import { Container, Row, Col } from "react-bootstrap";

const IMG = "https://via.placeholder.com/100";

const Team = () => {
    return (
      <div class="container">
       <h1 style={{ textAlign: 'center' }}>Meet Our Team</h1>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG}/>
          </Col>
          <Col xs={12} md={3} lg={2}>
          <About profile_img={IMG}/>
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG}/>
          </Col>
        </Row>
      </div>
    )
}

export default Team;
