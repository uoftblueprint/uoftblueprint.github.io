import React from 'react'
import './Projectspage.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProjectCard = (props) => {
    return (
        <Card style={{ width: '18rem'}} className={"text-center"}>
            <Card.Img variant="top" src={props.project_image}/>
            <Card.Body>
                <Card.Title>{props.project_title}</Card.Title>
                <Card.Text>{props.project_description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default function ProjectsPage() {
    return (
        <Container fluid="md">
            <Row >
                <Col><ProjectCard project_image={"https://via.placeholder.com/256"} project_title={"Viability"} project_description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris iaculis orci hendrerit varius. Proin ante neque, convallis sed lacinia sit amet, interdum nec."} /></Col>
                <Col><ProjectCard project_image={"https://via.placeholder.com/256"} project_title={"Shelter Movers"} project_description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris iaculis orci hendrerit varius. Proin ante neque, convallis sed lacinia sit amet, interdum nec."} /></Col>
                <Col><ProjectCard project_image={"https://via.placeholder.com/256"} project_title={"Your Project!"} project_description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris iaculis orci hendrerit varius. Proin ante neque, convallis sed lacinia sit amet, interdum nec."} /></Col>
            </Row>
        </Container>
        // <ProjectCard src={"https://via.placeholder.com/150"} project_title={"Viability"} project_description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris iaculis orci hendrerit varius. Proin ante neque, convallis sed lacinia sit amet, interdum nec."} />
    )
}