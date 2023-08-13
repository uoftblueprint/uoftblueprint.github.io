import React from 'react';
import './Projects.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
import shelter_movers from '../../assets/shelter_movers.png';
import merit_award from '../../assets/merit_award.png';
import hfh from '../../assets/hfh.png';
import sistema from '../../assets/sistema.png';
import period_purse from '../../assets/period_purse.png';
import tces from '../../assets/TCES.png'
import blueprint from '../../assets/mission-globe.svg';
import './Projects.css';

const ProjectCard = (props) => {
  return (
    <Card
      style={{ width: '20rem', height: '35em' }}
      className={'ProjectCard border-0'}
    >
      <Card.Img
        variant="top"
        src={props.project_image}
        style={{
          width: '100%',
          height: '12rem',
          crop: 'fill',
          objectFit: 'contain',
        }}
      />
      {window.innerWidth < 480 ? (
        <Card.Body>
          <Card.Title style={{ fontSize: '24px', fontWeight: '600' }}>
            {props.project_title}
          </Card.Title>
          <Card.Text
            style={{ fontSize: '14px', fontWeight: 'normal' }}
          >
            {props.project_description}
          </Card.Text>
          <Card.Link href={props.website}>Learn more</Card.Link>
        </Card.Body>
      ) : (
        <>
          <Card.Body style={{ height: '14em' }}>
            <Card.Title
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              {props.project_title}
            </Card.Title>
            <Card.Text
              style={{ fontSize: '14px', fontWeight: 'normal' }}
            >
              {props.project_description}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={props.website}>Learn more</Card.Link>
          </Card.Body>
        </>
      )}
    </Card>
  );
  // return (
  //     <Card style={{ width: '20rem', height: "35rem" }} className={"text-center ProjectCard border-0"}>
  //         <a href={props.website}><Card.Img variant="top" src={props.project_image} style={{ width: "100%", height: "18rem", padding: 0, margin: 0 }} /></a>
  //         <Card.Body style={{ padding: 0 }}>
  //             <Card.Title style={{ padding: "1rem 0 0 0 " }}>{props.project_title}</Card.Title>
  //             <Card.Text style={{ padding: "1rem", "font-size":"18px"}}>{props.project_description}</Card.Text>
  //         </Card.Body>
  //     </Card>
  // )
};

export default function ProjectsPage() {
  return (
    <>
      <Jumbotron fluid style={{ 'background-color': '#3E9CF3' }}>
        <Container fluid="md" className={'justify-content-center'}>
          <div
            style={{
              paddingLeft: '5%',
              paddingTop: '1.5em',
              paddingBottom: '2em',
            }}
          >
            <h1 style={{ 'font-size': '36px', color: '#FFFFFF' }}>
              Projects
            </h1>
            <div
              style={{
                minWidth: '30vw',
                width: '35em',
                maxWidth: '75vw',
                paddingBottom: '1em',
              }}
            >
              <h4
                style={{
                  padding: '25px 0 5px 0',
                  'font-size': '1.25rem',
                  color: '#FFFFFF',
                }}
                className={'text-responsive'}
              >
                If you are interested in working with us, click{' '}
                <a
                  style={{ color: 'white' }}
                  href="mailto:contact@uoftblueprint.org"
                >
                  here
                </a>{' '}
                to contact us with your project idea!
              </h4>
            </div>
            <a href="mailto:contact@uoftblueprint.org">
              <button class="contact-button">
                Let's get in touch!
              </button>
            </a>
          </div>
        </Container>
      </Jumbotron>
      <Container
        fluid="md"
        style={{ paddingTop: '4rem', paddingBottom: '8em' }}
      >
        <Row>
          <Col className={'Year'}>
            <h5>2022 - 2023</h5>
          </Col>
        </Row>
        <Row style={{ paddingTop: '2em', paddingLeft: '5%' }}>
          <Col>
            <ProjectCard
              website={'https://www.sistema-toronto.ca/'}
              project_image={sistema}
              project_title={'Sistema'}
              project_description={
                'Sistema Toronto provides musical and intellectual opportunities to children in vulnerable communities, with the goal of transformative social change. They are collaborating with us this year to create a mobile application that will help with their mission.'
              }
            />
          </Col>
          <Col>
            <ProjectCard
              website={'https://www.theperiodpurse.com/'}
              project_image={period_purse}
              project_title={'Period Purse'}
              project_description={
                'The Period Purse strives to achieve menstrual equity by providing people who menstruate with access to free menstrual products, and to reduce the stigma surrounding periods through public education and advocacy.'
              }
            />
          </Col>
          <Col>
            <ProjectCard
              website={'https://toronto-jobs.org/'}
              project_image={tces}
              project_title={'Toronto Community Employment Services'}
              project_description={
                'Toronto Community Employment Services (TCES) is a non-profit charitable organization offering no cost employment services, such as skill assessments, resume building, career counselling, workshops and more. We will be helping them build an internal-use CRM application.'
              }
            />
          </Col>
        </Row>
        <Row>
          <Col className={'Year'}>
            <h5>2021 - 2022</h5>
          </Col>
        </Row>
        <Row style={{ paddingTop: '2em', paddingLeft: '5%' }}>
          <Col>
            <ProjectCard
              website={'https://homesforheroesfoundation.ca/'}
              project_image={hfh}
              project_title={'Homes for Heroes'}
              project_description={
                'Their mission is to integrate all our homeless military veterans into the community through the provision of housing and support services across Canada.'
              }
            />
          </Col>
          <Col>
            <ProjectCard
              website={'https://www.theperiodpurse.com/'}
              project_image={period_purse}
              project_title={'Period Purse'}
              project_description={
                'The Period Purse strives to achieve menstrual equity by providing people who menstruate with access to free menstrual products, and to reduce the stigma surrounding periods through public education and advocacy.'
              }
            />
          </Col>
          <Col>
            {/* <ProjectCard
              website={'https://www.sheltermovers.com/'}
              project_image={shelter_movers}
              project_title={'Shelter Movers'}
              project_description={
                'Shelter Movers is a national, volunteer-powered charitable organization providing moving and storage services at no cost to women and children fleeing abuse. With guidance from local shelters and community agencies, they developed a survivor-centred, free moving service to fill a critical gap.'
              }
            /> */}
          </Col>
        </Row>
        <Row>
          <Col className={'Year'}>
            <h5>2020 - 2021</h5>
          </Col>
        </Row>
        <Row style={{ paddingTop: '2em', paddingLeft: '5%' }}>
          <Col>
            <ProjectCard
              website={'/'}
              project_image={blueprint}
              project_title={'Blueprint Website'}
              project_description={
                "This website! In the spirit of innovation and community, we decided to build all the club infrastructure ourselves, as a learning experience, and as a new opportunity for our members. This includes the website you're currently seeing!"
              }
            />
          </Col>
          <Col>
            <ProjectCard
              website={'http://meritaward.ca/'}
              project_image={merit_award}
              project_title={'Merit Award'}
              project_description={
                'The Merit Award project is a scholarship platform that handles applications, applicant recommendations, and applicant review for the purpose of awarding scholarships to high school students. The goal of the platform is to serve as a way for Merit Award to manage their scholarship program efficiently.'
              }
            />
          </Col>
          <Col>
            <ProjectCard
              website={'https://www.sheltermovers.com/'}
              project_image={shelter_movers}
              project_title={'Shelter Movers'}
              project_description={
                'Shelter Movers is a national, volunteer-powered charitable organization providing moving and storage services at no cost to women and children fleeing abuse. With guidance from local shelters and community agencies, they developed a survivor-centred, free moving service to fill a critical gap.'
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
