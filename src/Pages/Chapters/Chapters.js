import React, {useEffect, useState} from 'react'
import './Chapters.css'
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col, Card, Button, Jumbotron } from "react-bootstrap";
import shelter_movers from '../../assets/shelter_movers.png'
import merit_award from '../../assets/merit_award.png'
import veep from '../../assets/veep.png'
import { canadaChapters, usChapters }  from './chapterData';

const ChapterCard = ({ link, title, description, image }) => {
  return (
      <Card style={{ width: '20rem' }} className={'ProjectCard border-0'}>
          {window.innerWidth < 480 ? (
              <Card.Body>
                  <Card.Title style={{ fontSize: '24px', fontWeight: '600' }}>{title}</Card.Title>
                  <Card.Text style={{ fontSize: '14px', fontWeight: 'normal' }}>
                    {description}
                  </Card.Text>
                  <Card.Link href={link}>Learn more</Card.Link>
              </Card.Body>
          ) : (
              <>
                  <Card.Body>
                      <Card.Title style={{ fontSize: '24px', fontWeight: '600' }}>{title}</Card.Title>
                      <Card.Text style={{ fontSize: '14px', fontWeight: 'normal' }}>
                        {description}
                      </Card.Text>
                      <Card.Link href={link}>Learn more</Card.Link>
                  </Card.Body>
              </>
          )}
      </Card>
  )
}

const Chapters = () => {

  return (
    <>
      <Jumbotron fluid style={{ "background-color": "#3E9CF3"}}>
        <Container fluid="md" className={"justify-content-center"}>
            <div style={{ paddingLeft: '5%', paddingTop: '1.5em', paddingBottom: '2em' }}>
                <h1 style={{"font-size": "36px", color: '#FFFFFF' }}>
                  Chapters
                </h1>
                <div style={{ minWidth: '30vw', width: '35em', maxWidth: '75vw', paddingBottom: '1em' }}>
                    <h4 style={{ padding: "25px 0 5px 0", "font-size": "1.25rem", color: '#FFFFFF' }}  className={"text-responsive"}>
                    Blueprint was founded at UC Berkeley in Spring 2013. Since then they've started scaling their impact and further mission by establishing chapters in different colleges around the world, including us!
                    </h4>
                </div>
                <a href="https://calblueprint.org/chapters"><button class="contact-button">Start a Blueprint Chapter!</button></a>
            </div>
        </Container>
      </Jumbotron>
      <div class="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3E9CF3" fill-opacity="1" d="M0,256L26.7,250.7C53.3,245,107,235,160,224C213.3,213,267,203,320,170.7C373.3,139,427,85,480,96C533.3,107,587,181,640,208C693.3,235,747,213,800,213.3C853.3,213,907,235,960,202.7C1013.3,171,1067,85,1120,53.3C1173.3,21,1227,43,1280,90.7C1333.3,139,1387,213,1413,250.7L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
      </div>
      <Container fluid="md" style={{ paddingTop: "4rem", paddingBottom: '8em' }}>
        <Row>
          <Col className={'Year'}>
              <h5> 
                🇨🇦 Canada
              </h5>
          </Col>
        </Row>
        <Row style={{ paddingTop: '2em', paddingLeft: '5%' }}>
            {canadaChapters.map((chapter) => {
              return (
                <Col md="4">
                    <ChapterCard 
                      link={chapter.link} 
                      image={chapter.image} 
                      title={chapter.title} 
                      description={chapter.description}
                    />
                </Col>
              )
            })}
        </Row>
        <Row className="pt-5">
          <Col className={'Year'}>
              <h5> 
                🇺🇸 USA
              </h5>
          </Col>
        </Row>
        <Row style={{ paddingLeft: '5%', paddingTop: '1em' }}>
            {usChapters.map((chapter) => {
              return (
                <Col md="4">
                    <ChapterCard 
                      link={chapter.link} 
                      image={chapter.image} 
                      title={chapter.title} 
                      description={chapter.description}
                    />
                </Col>
              )
            })}
        </Row>
      </Container>
    </>
  )
}

export default Chapters;