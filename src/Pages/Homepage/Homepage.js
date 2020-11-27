import React, {useEffect, useState} from 'react'
import './Homepage.css'
import banner from '../../assets/banner.png'
import background from "../../assets/patternbackground.svg"
import main from '../../assets/main.png'
import missionIcon from "../../assets/icon1.svg"
import innovationIcon from '../../assets/icon2.svg'
import communityIcon from '../../assets/icon3.svg'
import waveBottom from '../../assets/aboutUsWaveBottom.svg'
import waveTop from '../../assets/aboutUsWaveTop.svg'


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
              <div id="main-image">    
                <img src={main} id="main-photo" />
              </div>
              <div id="main-text">
                <div id="text-container">
                  <p id="text1">Tech for Social Good</p>
                  <p id="text2">We are a group of students at the University of Toronto that provide technical solutions (or software) for nonprofits.</p>
                  <a href="http://bit.ly/uoftblueprint"><button className="apply-button">Apply now!</button></a>
                </div>
              </div>
            </div>

            {/* About Us */}
            <div id='waves'>
                    <img src={waveBottom} id='bottom-wave' style={{transform: `translateY(${offset * -0.05}px)`}}/>
                    <img src={waveTop} id='top-wave' style={{transform: `translateY(${offset * -0.1}px)`}}/>
            </div>
            <div id="about-container" className="text-center" style={{transform: `translateY(${offset * -0.1}px)`}}>
              <p className="sub-heading">About Us</p>
              <div style={{width: '50vw'}} className="text-center">
                <p id="about-text">Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.</p></div>
            </div>

            {/* Values */}
            <div id="values-section">
              <p className="sub-heading" style={{textAlign: 'center', color: '#0078E8', paddingBottom: '20px'}}>Our Values</p>
              <div id='values-horizontal'>
                <div className="value-container">
                    <img className="value-icons" src={missionIcon} />
                    <div className="value-text">
                    <p className="sub-text">Mission First</p>
                    <p>We will always prioritize the mission first. Our main priority is doing professional work for social good and public welfare.</p>
                    </div>
                    
                </div>
                <div className="value-container">
                    <img className="value-icons" src={innovationIcon} />
                    <div className="value-text">
                    <p className="sub-text">Innovation</p>
                    <p>We will continue to push the boundaries by combining the expertise of our developers and the nonprofit to guarantee the best possible solution.</p>
                    </div>
                    
                </div>
                <div className="value-container">
                    <img className="value-icons" src={communityIcon} />
                    <div className="value-text">
                    <p className="sub-text">Community</p>
                    <p>We strive to develop a tight-knit community both within our club and as part of a network of nonprofits.</p>
                    </div>
                    
                </div>
              </div>
            </div>

            {/* Contact */}
            <div id="contact-section">
              <div id="contact-container">
                <div id="contact-text">
                  <h2>Contact Us!</h2>
                  <div className='horizontal'>
                    <p>We are looking for nonprofits who are in need of technological solutions, as well as partners interested in supporting us and our cause.</p>
                    <a href="mailto:contact@uoftblueprint.org"><button className="contact-button">contact@uoftblueprint.org</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
}
