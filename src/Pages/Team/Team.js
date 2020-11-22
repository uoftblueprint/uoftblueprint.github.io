import React from "react";
import About from "./Components/About";
import { Container, Row, Col } from "react-bootstrap";

const IMG = "https://via.placeholder.com/100";

const Team = () => {
  return (
    <div class="container">
      <h3 className="TeamTitle">Meet Our Team</h3>
      <div className="TeamContainer">
        <h5 className="HeaderStyle">
          <span className="Header">EXECUTIVE TEAM</span>
        </h5>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Antoine Finot"} role={"President"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Angela Bi"} role={"VP External"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Karen Zhao"} role={"VP Internal"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Windsor Huang"} role={"VP Finance"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Olivia Li"} role={"Director of Projects"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Ling Lu"} role={"Director of Design"} />
          </Col>
        </Row>
      </div>

      <div className="TeamContainer">
        <h5 className="HeaderStyle">
          <span className="Header">SHELTER MOVERS</span>
        </h5>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Michael Jia"} role={"Product Manager"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Dakota McInnis"} role={"Project Lead"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Tammy Taabassum"} role={"Designer"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Anita Xu"} role={"Designer"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Sakina Gadriwala"} role={"Developer"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Dane Gledhill"} role={"Developer"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Rayyana Kambris"} role={"Developer"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Amy Peng"} role={"Developer"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Samuel Moor-Smith"} role={"Developer"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Chi-Hong Cheung"} role={"Developer"} />
          </Col>
        </Row>
      </div>

      <div className="TeamContainer">
        <h5 className="HeaderStyle">
          <span className="Header">MERIT AWARD</span>
        </h5>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Elena"} role={"Best Human"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Rajvi"} role={"Also Best Human"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Varun"} role={"Best Boi"} />
          </Col>
        </Row>
      </div>

      <div className="TeamContainer">
        <h5 className="HeaderStyle">
          <span className="Header">VIABILITY</span>
        </h5>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Elena"} role={"Best Human"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Rajvi"} role={"Also Best Human"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Varun"} role={"Best Boi"} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Team;
