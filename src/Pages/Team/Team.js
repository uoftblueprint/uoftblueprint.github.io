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
            <About
              profile_img={IMG}
              name={"Antoine Finot"}
              role={"President"}
              linkedin={"https://linkedin.com/in/antoine-f/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Angela Bi"}
              role={"VP External"}
              linkedin={"https://linkedin.com/in/angela-bi-/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Karen Zhao"}
              role={"VP Internal"}
              linkedin={"https://linkedin.com/in/karenjyzhao"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Windsor Huang"}
              role={"VP Finance"}
              linkedin={"https://linkedin.com/in/windsorhuang/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Olivia Li"}
              role={"Director of Projects"}
              linkedin={"https://linkedin.com/in/oliviaoli/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Ling Lu"}
              role={"Director of Design"}
              linkedin={"https://linkedin.com/in/ling-l-b4982288/"}
            />
          </Col>
        </Row>
      </div>

      <div className="TeamContainer">
        <h5 className="HeaderStyle">
          <span className="Header">SHELTER MOVERS</span>
        </h5>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Michael Jia"}
              role={"Product Manager"}
              linkedin={"https://linkedin.com/in/michaelzcjia"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Dakota McInnis"}
              role={"Project Lead"}
              linkedin={"https://linkedin.com/in/dakotamcinnis/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Tammy Taabassum"}
              role={"Designer"}
              linkedin={"https://linkedin.com/in/taamannae/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Anita Xu"} role={"Designer"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Sakina Gadriwala"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/sakina-gadriwala-14b779156/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Dane Gledhill"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/danegledhill/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Rayyana Kambris"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/raykambris"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Amy Peng"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/amy-p/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Samuel Moor-Smith"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/samuel-moor-smith"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Chi-Hong Cheung"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/cheung-chihong/"}
            />
          </Col>
        </Row>
      </div>

      <div className="TeamContainer">
        <h5 className="HeaderStyle">
          <span className="Header">MERIT AWARD</span>
        </h5>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Trudie Cheung"} role={"Product Manager"} 
            linkedin={"https://linkedin.com/in/trudiecheung/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Rishab Luthra"} role={"Project Lead"} 
            linkedin={"https://linkedin.com/in/rishabluthra"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Trudie Cheung"} role={"Product Manager"} 
            linkedin={"https://linkedin.com/in/trudiecheung/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Trudie Cheung"} role={"Product Manager"} 
            linkedin={"https://linkedin.com/in/trudiecheung/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Trudie Cheung"} role={"Product Manager"} 
            linkedin={"https://linkedin.com/in/trudiecheung/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Trudie Cheung"} role={"Product Manager"} 
            linkedin={"https://linkedin.com/in/trudiecheung/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Trudie Cheung"} role={"Product Manager"} 
            linkedin={"https://linkedin.com/in/trudiecheung/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Trudie Cheung"} role={"Product Manager"} 
            linkedin={"https://linkedin.com/in/trudiecheung/"}
            />
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
