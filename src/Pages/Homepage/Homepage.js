import React, {useEffect, useState} from 'react'
import './Homepage.css'
import main from '../../assets/main2.svg'
import missionIcon from "../../assets/mission-globe.svg"
import innovationIcon from '../../assets/innovation-box.svg'
import communityIcon from '../../assets/community-hands.svg'
import waveBottom from '../../assets/aboutUsWaveBottom.svg'
import waveTop from '../../assets/aboutUsWaveTop.svg'
import ValueCard from "./ValueCard";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function Homepage() {
  return (
    <div>
      <Container>
        <Row className='justify-content-md-center align-items-center'>
          <Col xs={12} md={6}>
            <p className='text1 text-left'>Tech for Social Good</p>
            <p className='text2 text-left'>
              We are a team of students at the University of Toronto that provide software solutions
              for nonprofits.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <Image src={main} fluid />
            </div>
          </Col>
        </Row>
      </Container>

      {/* About Us */}
      <div id='waves'>
        <img src={waveBottom} alt='UofT Blueprint Bottom Wave' id='bottom-wave' />
        <img src={waveTop} alt='UofT Blueprint Top Wave' id='top-wave' />
      </div>

      <div id='about-container' className='text-center section'>
        <Container>
          <h2 className='sub-heading'>About Us</h2>
          <p id='about-text'>
            Blueprint strives to make technology accessible and useful for those who assist
            communities and promote public welfare.
          </p>
        </Container>
      </div>

      {/* Values */}
      <div className='section'>
        <Container>
          <h2 className='text-center mb-5'>Our Values</h2>
          <Row>
            <Col>
              <ValueCard image={missionIcon} title={'Mission First'}>
                <p>
                  We will always prioritize the mission first. Our main priority is doing
                  professional work for social good and public welfare.
                </p>
              </ValueCard>
            </Col>
            <Col>
              <ValueCard image={innovationIcon} title={'Innovation'}>
                <p>
                  We will continue to push the boundaries by combining the expertise of our
                  developers and the nonprofit to guarantee the best possible solution.
                </p>
              </ValueCard>
            </Col>
            <Col>
              <ValueCard image={communityIcon} title={'Community'}>
                <p>
                  We strive to develop a tight-knit community both within our club and as part of a
                  network of nonprofits.
                </p>
              </ValueCard>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact */}
      <ContactSection />
    </div>
  );
}

export function ContactSection() {
  return (
    <div id='contact-section' className='section'>
      <Container>
        <Row className='align-items-center'>
          <Col className='text-left' xs={12} sm={6}>
            <div id='contact-text'>
              <h2>Contact Us!</h2>
              <p>
                We are looking for nonprofits who are in need of technological solutions, as well as
                partners interested in supporting us and our cause.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <button
              className='contact-button'
              onClick={() => {
                window.open('mailto:contact@uoftblueprint.org');
              }}>
              contact@uoftblueprint.org
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
