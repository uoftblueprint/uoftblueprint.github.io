import React, { useEffect } from "react";
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import toronto from '../../assets/toronto.png';
import pharmacy from '../../assets/pharmacy.png';
import './Apply.css';

const Apply = () => {
  return (
    <div>
        <Row style={{ paddingTop: '4em', paddingBottom: '4em' }} className="justify-content-center bg-transparent">
          <Col md="4" className="bg-transparent">
            <Card className="ApplyCard" style={{ backgroundColor: 'transparent', border: 'transparent' }}>
              <Card.Img style={{ maxHeight: '16em', objectFit: 'cover' }} variant="top" src={pharmacy} />
              <Card.Body>
                <Card.Title style={{ fontSize: '40px', fontWeight: '600' }}>For Nonprofits</Card.Title>
                <Card.Text style={{ color: 'grey', fontSize: '24px', fontWeight: '500' }}>
                  Partner with Blueprint to build the application your organization needs.
                </Card.Text>
                <Card.Text style={{ cursor: 'pointer', color: '#00407B', fontSize: '24px', fontWeight: '600' }}>
                  <Link to="/apply/nonprofits">{'Learn More >'}</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="bg-transparent">
            <Card className="ApplyCard" style={{ backgroundColor: 'transparent', border: 'transparent' }}>
              <Card.Img style={{ maxHeight: '16em', objectFit: 'cover' }} variant="top" src={toronto} />
              <Card.Body>
                <Card.Title style={{ fontSize: '40px', fontWeight: '600' }}>For Students</Card.Title>
                <Card.Text style={{ color: 'grey', fontSize: '24px', fontWeight: '500' }}>
                  Use your skills to give back to the community. Join us today!
                </Card.Text>
                <Card.Text style={{ cursor: 'pointer', color: '#00407B', fontSize: '24px', fontWeight: '600' }}>
                  <Link to="/apply/students">{'Learn More >'}</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </div>
    
  )
}

export default Apply;