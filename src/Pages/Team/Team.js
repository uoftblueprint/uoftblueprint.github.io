import React from 'react';
import About from "./Components/About";
import { Container, Row, Col } from "react-bootstrap";

const Team = () => {
    return (
      <div class="container">
       <h1 style={{ textAlign: 'center' }}>Team</h1>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <About/>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <About/>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <About/>
          </Col>
        </Row>
      </div>
    )
}

export default Team;
