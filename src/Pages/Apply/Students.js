import React, { useEffect } from "react";
import { Row, Col, Card, Jumbotron, Container } from 'react-bootstrap';
import toronto from '../../assets/toronto.png';
import pharmacy from '../../assets/pharmacy.png';
import './Apply.css';

const Students = () => {
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
    </>
    
  )
}

export default Students;