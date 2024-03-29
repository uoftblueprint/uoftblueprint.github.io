import React from "react";
import About from "./Components/About";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import placeholder from "./Images/placeholder.JPG";
import { ContactSection } from "../Homepage/Homepage";

const teams = require("./teams.json");

const Footer = () => {
  if (window.innerWidth < 480)
    return (
      <Container style={{ background: "#3E9CF3", padding: "3.5em 3.5em" }}>
        <Row>
          <h1 className={"MobileFooterTitle"}>Wanna join the team?</h1>
        </Row>
        <Row>
          <p className={"MobileFooterBody"}>
            We are always looking for new talent! If you would love to learn
            more about the opportunities here at UofT Blueprint, feel free to
            contact us for any inquiries!
          </p>
        </Row>
        <Row style={{ paddingTop: "1em" }}>
          <Button
            style={{ backgroundColor: "#ffffff" }}
            className="MobileBottomButton"
          >
            <a href="mailto:contact@uoftblueprint.org">
              contact@uoftblueprint.org
            </a>
          </Button>
        </Row>
        <Container style={{ paddingTop: "3em", textAlign: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p className="Copyright">@ Blueprint 2020.</p>
          </div>
        </Container>
      </Container>
    );
  return (
    <div className="BottomContainer">
      <Row>
        <Col md="6">
          <h4 className={"FooterTitle"}>Contact Us!</h4>
          <p className={"FooterBody"}>
            We are looking for non-profits who are in need of technological
            solutions, as well as partners interested in supporting us and our
            cause.
          </p>
        </Col>
        <Col>
          <a href="mailto:contact@uoftblueprint.org">
            <button className="contact-button BottomButton">
              contact@uoftblueprint.org
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

const Banner = () => {
  return (
    <div id='banner-container'>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <p id='banner-text'>
              We're aiming to change our surrounding community, one Blueprint at a time! Meet the
              2022-2023 project teams!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function create_members(i) {
  var membersArr = [];
  for (let j = 0; j < teams[i].members.length; j++) {
    try {
      var img_file = require("./Images/" +
        teams[i].members[j].name.replace(" ", "") +
        ".jpg").default;
    } catch (err) {
      var img_file = placeholder;
    }
    membersArr.push(
      <Col xs={6} md={3} lg={2}>
        <About
          profile_img={img_file}
          name={teams[i].members[j].name}
          role={teams[i].members[j].role}
          linkedin={teams[i].members[j].linkedin}
        />
      </Col>
    );
  }
  return membersArr;
}

function create_teams() {
  var teamsArr = [];
  for (let i = 0; i < teams.length; i++) {
    teamsArr.push(
      <div>
        <h5 className='HeaderStyle'>{teams[i]['team name']}</h5>
        <Row className="py-5">{create_members(i)}</Row>
      </div>
    );
  }
  // teamsArr.push(
  //   <div className="TeamContainer">
  //     <h5 className="HeaderStyle">
  //       <span className="Header">ALUMNI</span>
  //     </h5>
  //     <p id="alumni-text">Thank you to all of our alumni who have given their time and effort to our cause for social good. We couldn't have done it without you!</p>
  //     <a href="https://uoftblueprint.org/alumni"><button id="alumni-button">View Alumni</button></a>
  //   </div>
  // )
  return teamsArr;
}

const Team = () => {
  return (
    <div>
      <Banner />
      <div className="container">{create_teams()}</div>
      <ContactSection />
    </div>
  );
};

export default Team;
