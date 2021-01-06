import React, { useEffect } from "react";
import { Row, Col, Card, Jumbotron, Container } from 'react-bootstrap';
import standing from '../../assets/standing 8.png';
import { CriteriaList } from './applyData';
import './Apply.css';

const Criteria = ({ title, description, image }) => {
  return (
    <Row>
      <Col md="auto">
        <img src={image} style={{ paddingTop: '1em', width: '2.5em', height: 'auto' }} />
      </Col>
      <Col md="6" style={{ paddingTop: '1em' }}>
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
            <div style={{ paddingLeft: '5%', paddingTop: '1.5em', paddingBottom: '2em' }}>
                <h1 style={{"font-size": "36px", color: '#FFFFFF' }}>
                    For Students
                </h1>
                <div style={{ minWidth: '30vw', width: '35em', maxWidth: '75vw', paddingBottom: '1em' }}>
                    <h4 style={{ padding: "25px 0 5px 0", "font-size": "2rem", color: '#FFFFFF', fontWeight: '200' }}  className={"text-responsive"}>
                      Joining Blueprint is the perfect way to use your skills to give back to the community. We accept applications at the beginning of every semester.
                    </h4>
                </div>
                <div style={{ minWidth: '30vw', width: '35em', maxWidth: '75vw', paddingBottom: '1em' }}>
                    <h5 style={{ padding: "25px 0 5px 0", "font-size": "1.2rem", color: '#FFFFFF' }}  className={"text-responsive"}>
                      Our application for developers and designers are now closed for the 2020-2021 academic year. We will be recruiting again in Fall 2021!
                    </h5>
                </div>
            </div>
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
                <h1> 
                    What We Look For
                </h1>
                <p style={{ paddingTop: '2em', color: 'grey', fontSize: '1.4em', fontWeight: '400' }}>
                 We would love to accept every applicant if we could, but unfortunately we cannot manage the volume of people and administrative overhead while still fulfilling our mission as a club. As such, we use the following criteria to find the best applicants for our club.
                </p>
                {CriteriaList.map((criteria) => {
                  return (
                    <Criteria 
                      title={criteria.title}
                      description={criteria.description}
                      image={criteria.image}
                      />
                  )
                })}
            </Col>
          </Row>
      </Container>
    </>
    
  )
}

export default Students;