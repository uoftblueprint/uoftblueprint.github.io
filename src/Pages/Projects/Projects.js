import React from 'react'
import './Projects.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron } from 'react-bootstrap'
import shelter_movers from '../../assets/shelter_movers.png'
import merit_award from '../../assets/merit_award.png'
import veep from '../../assets/veep.png'
import blueprint from '../../assets/mission-globe.svg'
import './Projects.css'

const ProjectCard = (props) => {
    return (
        <Card style={{ width: '18rem', height: '35em' }} className={'ProjectCard border-0'}>
            <Card.Img 
                variant="top" 
                src={props.project_image} 
                style={{ width: "100%", height: "12rem", crop: 'fill' }}
            />
            <Card.Body style={{ height: '20em' }}>
                <Card.Title className={'ProjectTitle'}>{props.project_title}</Card.Title>
                <Card.Text className={'ProjectDescription'}>
                {props.project_description}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={props.website}>Learn more</Card.Link>
            </Card.Body>
        </Card>
    )
    // return (
    //     <Card style={{ width: '20rem', height: "35rem" }} className={"text-center ProjectCard border-0"}>
    //         <a href={props.website}><Card.Img variant="top" src={props.project_image} style={{ width: "100%", height: "18rem", padding: 0, margin: 0 }} /></a>
    //         <Card.Body style={{ padding: 0 }}>
    //             <Card.Title style={{ padding: "1rem 0 0 0 " }}>{props.project_title}</Card.Title>
    //             <Card.Text style={{ padding: "1rem", "font-size":"18px"}}>{props.project_description}</Card.Text>
    //         </Card.Body>
    //     </Card>
    // )
}

export default function ProjectsPage() {
    return (
        <>
            <Jumbotron fluid style={{ "background-color": "#3E9CF3"}}>
                <Container fluid="md" className={"justify-content-center"}>
                    <div style={{ paddingLeft: '5%', paddingTop: '1.5em', paddingBottom: '2em' }}>
                        <h1 style={{"font-size": "36px", color: '#FFFFFF' }}>
                            Current Projects
                        </h1>
                        <div style={{ minWidth: '30vw', width: '35em', maxWidth: '75vw', paddingBottom: '1em' }}>
                            <h4 style={{ padding: "25px 0 5px 0", "font-size": "1.25rem", color: '#FFFFFF' }}  className={"text-responsive"}>
                                If you are interested in working with us, click <a style={{ color: 'white' }}href="mailto:contact@uoftblueprint.org">here</a> 
                                {' '}to contact us with your project idea!
                            </h4>
                        </div>
                        {/* <a href="mailto:contact@uoftblueprint.org"><button class="contact-button">Let's get in touch!</button></a> */}
                    </div>
                </Container>
            </Jumbotron>
            <Container fluid="md" style={{ paddingTop: "4rem" }}>
                <Row>
                    <div className={'Year'}>
                        <h5> 
                            2020 - 2021
                        </h5>
                    </div>
                </Row>
                <Row style={{ paddingTop: '2em', paddingLeft: '5%' }}>
                    <Col>
                        <ProjectCard website={"/"} project_image={blueprint} project_title={"Blueprint Website"} project_description={"This website! In the spirit of innovation and community, we decided to build all the club infrastructure ourselves, as a learning experience, and as a new opportunity for our members. This includes the website you're currently seeing!"} />
                    </Col>
                    <Col>
                        <ProjectCard website={"http://meritaward.ca/"} project_image={merit_award} project_title={"Merit Award"} project_description={"The Merit Award project is a scholarship platform that handles applications, applicant recommendations, and applicant review for the purpose of awarding scholarships to high school students. The goal of the platform is to serve as a way for Merit Award to manage their scholarship program efficiently."} />
                    </Col>
                    <Col>
                        <ProjectCard website={"https://www.sheltermovers.com/"} project_image={shelter_movers} project_title={"Shelter Movers"} project_description={"Shelter Movers is a national, volunteer-powered charitable organization providing moving and storage services at no cost to women and children fleeing abuse. With guidance from local shelters and community agencies, they developed a survivor-centred, free moving service to fill a critical gap."} />
                    </Col>
                </Row>
                {/* <Row>
                    <Col className="Col">
                        <ProjectCard website={"http://uoftveep.herokuapp.com/"} project_image={veep} project_title={"VEEP - Collaboration Project"} project_description={"The Volunteer Engineering Experience Program (VEEP) is an undergraduate club based at the University of Toronto that pairs local, community oriented organizations with student teams who have technical expertise to create a product that will improve our partner organizations’ impact on their community."} />
                    </Col>
                </Row> */}
            </Container>
        </>
    )
}
