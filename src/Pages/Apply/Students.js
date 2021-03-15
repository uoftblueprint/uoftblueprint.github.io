import React from "react";
import { Row, Col, Jumbotron, Container } from 'react-bootstrap';
import standing from '../../assets/standing 8.png';
import team from '../../assets/team-build2.png';
import { CriteriaList } from './applyData';
import './Apply.css';
import { Link} from "react-scroll";

const Criteria = ({ title, description, image }) => {
  return (
    <Row>
      <Col md="3">
        <img src={image} style={{ paddingTop: '1.5em', width: 'auto', height: '4.5em' }} />
      </Col>
      <Col md="8" style={{ paddingTop: '1em' }}>
        <h5 style={{ fontWeight: '600' }}>
          {title}
        </h5>
        <p style={{ color: 'grey', fontWeight: '400'}}>
          {description}
        </p>
      </Col>
    </Row>
  )
}

const Students = () => {
  return (
    <>
      <Jumbotron fluid style={{ "background-color": "#3E9CF3"}}>
        <Container fluid="md" className={"justify-content-center"}>
          <Row>
            <Col md="auto">
              <div style={{ paddingLeft: '5%', paddingTop: '1.5em', paddingBottom: '2em' }}>
                  <h1 style={{"font-size": "36px", color: '#FFFFFF' }}>
                      For Students
                  </h1>
                  <div style={{ minWidth: '30vw', width: '35em', maxWidth: '75vw', paddingBottom: '1em' }}>
                      <h4 style={{ padding: "25px 0 5px 0", "font-size": "2rem", color: '#FFFFFF', fontWeight: '200' }}  className={"text-responsive"}>
                        Joining Blueprint is the perfect way to use your skills to give back to the community. We accept applications at the beginning of every year.
                      </h4>
                  </div>
                  <div style={{ minWidth: '30vw', width: '35em', maxWidth: '75vw', paddingBottom: '1em' }}>
                      <h5 style={{ padding: "25px 0 5px 0", "font-size": "1.2rem", color: '#FFFFFF' }}  className={"text-responsive"}>
                        Our application for developers and designers are now closed for the 2020-2021 academic year. We will be recruiting again in Fall 2021!
                      </h5>
                  </div>
                  <div>
                      {/* <h5 style={{ padding: "25px 0 5px 0", "font-size": "1rem", color: '#FFFFFF' }}  className={"text-responsive"}>
                        <button onClick={executeScroll}>What do we look for?</button>
                      </h5> */}
                      <button>
                        {/* <Link activeClass="active" to="requirements" spy={true} smooth={true} duration={1000} style={{ padding: "25px 0 5px 0", "font-size": "1.2rem", color: '#FFFFFF' }}>
                          What we look for
                        </Link> */}
                        <a href="http://bit.ly/uoftbp-app-form" style={{ padding: "25px 0 5px 0", "font-size": "1.2rem", color: '#FFFFFF' }}>Apply Now</a>
                      </button>
                  </div>
              </div>
            </Col>
            <Col md="5" style={{ paddingLeft: '4em'}}>
              <img className="jumboImage" src={team} style={{ paddingTop: '4em', paddingBottom: '4em', width: '30em', height: 'auto' }} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid="md" style={{ paddingTop: "4rem", paddingBottom: '8em' }}>
          <Row>
            { window.innerWidth < 480 ? null : (
              <Col md="3">
                <img src={standing} style={{ paddingTop: '4em', paddingBottom: '4em', width: '15em', height: 'auto' }} />
              </Col>
            )}
            <Col md="8">
                <h1 id={"requirements"}> 
                    What We Look For
                </h1>
                <p style={{ paddingTop: '2em', color: 'grey', fontSize: '1.4em', fontWeight: '400' }}>
                 We would love to accept every applicant if we could, but unfortunately we cannot manage the volume of people and administrative overhead while still fulfilling our mission as a club. As such, we use the following criteria to find the best applicants for our club.
                </p>
                <Container className="pt-3">
                  <Row>
                    <Col>
                      <Criteria 
                        title={CriteriaList[0].title}
                        description={CriteriaList[0].description}
                        image={CriteriaList[0].image}
                        />
                    </Col>
                    <Col>
                      <Criteria 
                        title={CriteriaList[1].title}
                        description={CriteriaList[1].description}
                        image={CriteriaList[1].image}
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Criteria 
                        title={CriteriaList[2].title}
                        description={CriteriaList[2].description}
                        image={CriteriaList[2].image}
                        />
                    </Col>
                    <Col>
                      <Criteria 
                        title={CriteriaList[3].title}
                        description={CriteriaList[3].description}
                        image={CriteriaList[3].image}
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Criteria 
                        title={CriteriaList[4].title}
                        description={CriteriaList[4].description}
                        image={CriteriaList[4].image}
                        />
                    </Col>
                    <Col>
                      <Criteria 
                        title={CriteriaList[5].title}
                        description={CriteriaList[5].description}
                        image={CriteriaList[5].image}
                        />
                    </Col>
                  </Row>
                </Container>
            </Col>
          </Row>
      </Container>
    </>
    
  )
}

export default Students;