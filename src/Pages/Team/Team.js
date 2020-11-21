import React from 'react';
import About from "./Components/About";
import { Container, Row, Col } from "react-bootstrap";

const IMG = "https://via.placeholder.com/100";

const Team = () => {
    return (
      <div class="container">
       <h3 className="TeamTitle">Meet Our Team</h3>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Elena"} role={"Best Human"}/>
          </Col>
          <Col xs={12} md={3} lg={2}>
          <About profile_img={IMG} name={"Rajvi"} role={"Also Best Human"}/>
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Varun"} role={"Best Boi"}/>
          </Col>
        </Row>
      </div>
    )
}

export default Team;
