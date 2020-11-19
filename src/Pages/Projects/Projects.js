import React from 'react'
import './Projects.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Jumbotron } from 'react-bootstrap'

const ProjectCard = (props) => {
    return (
        <Card style={{ width: '20rem' }} className={"text-center"}>
            <Card.Img variant="top" src={props.project_image} />
            <Card.Body>
                <Card.Title>{props.project_title}</Card.Title>
                <Card.Text>{props.project_description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default function ProjectsPage() {
    return (
        <>
            <Jumbotron fluid>
                <Container fluid="md">
                    <h1>Current Projects</h1>
                    <h4>
                        Blah blah project blurb. Click here to apply for us to do  a project.
                    </h4>
                </Container>

            </Jumbotron>
            <Container fluid="md">
                <Row >
                    <Col>
                        <ProjectCard project_image={"https://via.placeholder.com/250"} project_title={"Viability"} project_description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris iaculis orci hendrerit varius. Proin ante neque, convallis sed lacinia sit amet, interdum nec."} />
                    </Col>
                    <Col>
                        <ProjectCard project_image={"https://via.placeholder.com/250"} project_title={"Shelter Movers"} project_description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris iaculis orci hendrerit varius. Proin ante neque, convallis sed lacinia sit amet, interdum nec."} />
                    </Col>
                    <Col>
                        <ProjectCard project_image={"https://via.placeholder.com/250"} project_title={"Your Project!"} project_description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris iaculis orci hendrerit varius. Proin ante neque, convallis sed lacinia sit amet, interdum nec."} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
