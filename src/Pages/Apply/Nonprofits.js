import React from "react";
import { Row, Col, Jumbotron, Container } from 'react-bootstrap';
import standing from '../../assets/standing-7.png';
import work from '../../assets/work-together.png';
import { NonprofitList } from './applyData';
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

const Nonprofits = () => {
  return (
    <>
      <Jumbotron fluid style={{ "background-color": "#3E9CF3"}}>
        <Container fluid="md" className={"justify-content-center"}>
          <Row>
            <Col md="auto">
              <div style={{ paddingLeft: '5%', paddingTop: '1.5em', paddingBottom: '2em' }}>
                  <h1 style={{"font-size": "36px", color: '#FFFFFF' }}>
                    For Nonprofits
                  </h1>
                  <div style={{ minWidth: '30vw', width: '35em', maxWidth: '75vw', paddingBottom: '1em' }}>
                      <h4 style={{ padding: "25px 0 5px 0", "font-size": "2rem", color: '#FFFFFF', fontWeight: '200' }}  className={"text-responsive"}>
                        As a partner, Blueprint will work with you to develop technology that turns your vision into a reality, completely free of charge.
                      </h4>
                  </div>
                  <div style={{ minWidth: '30vw', width: '35em', maxWidth: '75vw', paddingBottom: '1em' }}>
                      <h5 style={{ padding: "25px 0 5px 0", "font-size": "1.2rem", color: '#FFFFFF' }}  className={"text-responsive"}>
                        We are no longer accepting nonprofit applications for the 2020-2021 academic year. Please contact us if you are interested in partnering with us in the future! 
                      </h5>
                  </div>
                  <button>
                      <Link activeClass="active" to="requirements" spy={true} smooth={true} duration={1000} style={{ padding: "25px 0 5px 0", "font-size": "1.2rem", color: '#FFFFFF' }}>
                        What we look for
                      </Link>
                  </button>
              </div>
            </Col>
            <Col md="5" style={{ paddingLeft: '4em'}}>
              <img className="jumboImage" src={work} style={{ paddingTop: '4em', paddingBottom: '4em', width: '30em', height: 'auto' }} />
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
                  Decision Criteria
                </h1>
                  <p style={{ paddingTop: '2em', color: 'grey', fontSize: '1.4em', fontWeight: '400' }}>
                  Although we want to help as many organizations as possible, we can only work with a few nonprofits at a time because of the amount of resources each partnership requires. As such, we use the following criteria to find projects with the best fit.
                  </p>
                <Container className="pt-3">
                  <Row>
                    <Col md="6">
                      <Criteria 
                        title={NonprofitList[0].title}
                        description={NonprofitList[0].description}
                        image={NonprofitList[0].image}
                        />
                    </Col>
                    <Col md="6">
                      <Criteria 
                        title={NonprofitList[1].title}
                        description={NonprofitList[1].description}
                        image={NonprofitList[1].image}
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Criteria 
                        title={NonprofitList[2].title}
                        description={NonprofitList[2].description}
                        image={NonprofitList[2].image}
                        />
                    </Col>
                    <Col md="6">
                      <Criteria 
                        title={NonprofitList[3].title}
                        description={NonprofitList[3].description}
                        image={NonprofitList[3].image}
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Criteria 
                        title={NonprofitList[4].title}
                        description={NonprofitList[4].description}
                        image={NonprofitList[4].image}
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

export default Nonprofits;