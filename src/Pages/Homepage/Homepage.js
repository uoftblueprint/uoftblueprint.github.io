import React, {useEffect, useState} from 'react'
import './Homepage.css'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import banner from '../../assets/banner.png'
import background from "../../assets/patternbackground.svg"
import main from '../../assets/main.svg'
import missionIcon from "../../assets/mission-globe.svg"
import missionBlob from "../../assets/mission-blob.svg"
import innovationIcon from '../../assets/innovation-box.svg'
import innovationBlob from "../../assets/innovation-blob.svg"
import communityIcon from '../../assets/community-hands.svg'
import communityBlob from "../../assets/community-blob.svg"
import waveBottom from '../../assets/aboutUsWaveBottom.svg'
import waveTop from '../../assets/aboutUsWaveTop.svg'
import ValueCard from "./ValueCard";


export default function Homepage() {

    const [offset, setOffset] = useState(0)
    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div>
            {/*
            <div id="nav-bar">
              <a href="./index.html"><img src={banner} id="logo" /></a>
                       <div id="nav-links">
              <a href="./projects.html" class="nav-menu" style="text-decoration: none;">Projects</a>
              <a href="./meet_team.html" class="nav-menu" style="text-decoration: none;">Team</a>
  
          </div> 
            </div> */}
            <div id="landing-container">
              <div id="main-text">
                <div id="text-container"  style={{transform: `translateY(${offset * -0.1}px)`}}>
                  <p id="text1"><span style={{display: "inline-block"}}>Tech for&nbsp;</span><span style={{display: "inline-block"}}>Social Good</span></p>
                  <p id="text2">We are a team of students at the University of Toronto that provide software solutions for nonprofits.</p>
                  {/* <a href="mailto:contact@uoftblueprint.org"><button className="apply-button">Contact us!</button></a> */}
                </div>
              </div>
              {window.innerWidth > 700 ? (
                <div id="main-image">
                  <img src={main} id="main-photo" />
                </div>
              ) : null}
              {window.innerWidth < 700 ? (
              <div id="main-image">
                <img src={main} id="main-photo" style={{ paddingTop: '2em', width: '70vw', height: 'auto' }} />
              </div>) : null}
            </div>

            {/* About Us */}
            <div id='waves'>
                    <img src={waveBottom} id='bottom-wave' style={{transform: `translateY(${offset * 0.1}px)`}}/>
                    <img src={waveTop} id='top-wave'/>
            </div>
            <div id="about-container" className="text-center">
              <p className="sub-heading">About Us</p>
              <div style={{width: '50vw'}} className="text-center">
                {window.innerWidth > 480 ? (
                  <p id="about-text">Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.</p>
                ) : (
                  <p style={{ fontSize: '18px' }} id="about-text">Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.</p>
                )}
              </div>
            </div>

            {/* Values */}
            <div id="values-section" >
              <p className="sub-heading" style={{textAlign: 'center', color: '#0078E8', paddingBottom: '20px'}}>Our Values</p>
                <div id='values-grid'>
                  <ValueCard image = {missionIcon} title={"Mission First"}>
                    <p>We will always prioritize the mission first. Our main priority is doing professional work for social good and public welfare.</p>
                  </ValueCard>
                  <ValueCard image={innovationIcon} title={"Innovation"}>
                    <p>We will continue to push the boundaries by combining the expertise of our developers and the nonprofit to guarantee the best possible solution.</p>
                  </ValueCard>
                  <ValueCard image={communityIcon} title={"Community"}>
                    <p>We strive to develop a tight-knit community both within our club and as part of a network of nonprofits.</p>
                  </ValueCard>
                </div>
            </div>

            {/* Contact */}
              <div id="contact-section">
                <div id="contact-container" className='horizontal'>
                  <div id="contact-text">
                    <h2>Contact Us!</h2>
                    <p>We are looking for nonprofits who are in need of technological solutions, as well as partners interested in supporting us and our cause.</p>
                  </div>
                  <a href="mailto:contact@uoftblueprint.org"><button className="contact-button">contact@uoftblueprint.org</button></a>
                </div>
              </div>
          </div>
      );
}
