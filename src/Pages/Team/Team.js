import React from "react";
import About from "./Components/About";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import placeholder from "./Images/placeholder.JPG";
import heart from "./Images/heart.png";

// IMAGES: IK THIS IS INEFFICIENT DON'T @ ME
import alexander from "./Images/alexander.jpg";
import amy from "./Images/amy.jpg";
import anita from "./Images/anita.jpg";
import baker from "./Images/baker.jpg";
import chihong from "./Images/chihong.jpg";
import dakota from "./Images/dakota.jpg";
import dane from "./Images/dane.jpg";
import fiza from "./Images/fiza.jpg";
import jordan from "./Images/jordan.jpg";
import karen from "./Images/karen.jpg";
import michael from "./Images/michael.jpg";
import rajvi from "./Images/rajvi.jpg";
import rayyana from "./Images/rayyana.jpg";
import rishab from "./Images/rishab.jpg";
import sakina from "./Images/sakina.jpg";
import samuel from "./Images/samuel.jpg";
import sheree from "./Images/sheree.jpg";
import song from "./Images/song.jpg";
import stella from "./Images/stella.jpg";
import tammy from "./Images/tammy.jpg";
import trudie from "./Images/trudie.jpg";
import windsor from "./Images/windsor.jpg";

const Footer = () => {
	if (window.innerWidth < 480)
		return (
			<Container style={{ background: "#3E9CF3", padding: "3.5em 3.5em" }}>
				<Row>
					<h1 className={"MobileFooterTitle"}>Wanna join the team?</h1>
				</Row>
				<Row>
					<p className={"MobileFooterBody"}>
						We are always looking for new talent! If you would love to learn
						more about the opportunities here at UofT Blueprint, feel free to
						contact us for any inquiries!
					</p>
				</Row>
				<Row style={{ paddingTop: "1em" }}>
					<Button
						style={{ backgroundColor: "#ffffff" }}
						className="MobileBottomButton"
					>
						<a href="mailto:contact@uoftblueprint.org">
							contact@uoftblueprint.org
						</a>
					</Button>
				</Row>
				<Container style={{ paddingTop: "3em", textAlign: "center" }}>
					<div style={{ textAlign: "center" }}>
						<p className="Copyright">@ Blueprint 2020.</p>
					</div>
				</Container>
			</Container>
		);
	return (
		<div className="BottomContainer">
			<Row>
				<Col md="auto" style={{ paddingLeft: "5vw" }}>
					<Image
						style={{ paddingTop: "1em", width: "6em", height: "auto" }}
						src={heart}
					/>
				</Col>
				<Col md="6">
					<h4 className={"FooterTitle"}>Wanna join the team?</h4>
					<p className={"FooterBody"}>
						We are always looking for new talent! If you would love to learn
						more about the opportunities here at UofT Blueprint, feel free to
						contact us for any inquiries!
					</p>
				</Col>
				<Col>
					<a href="mailto:contact@uoftblueprint.org">
						<button className="contact-button BottomButton">
							contact@uoftblueprint.org
						</button>
					</a>
				</Col>
			</Row>
		</div>
	);
};

const Team = () => {
	return (
		<div>
			<div className="container">
				<h3 className="TeamTitle">Meet Our Team</h3>
				<div className="TeamContainer">
					<h5 className="HeaderStyle">
						<span className="Header">EXECUTIVE TEAM</span>
					</h5>
					<Row>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={karen}
								name={"Karen Zhao"}
								role={"Co-President"}
								linkedin={"https://linkedin.com/in/karenjyzhao"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={windsor}
								name={"Windsor Huang"}
								role={"Co-President"}
								linkedin={"https://linkedin.com/in/windsorhuang/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={alexander}
								name={"Alex Shih"}
								role={"VP Internal"}
								linkedin={"https://linkedin.com/in/alexandershih2022/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={baker}
								name={"Baker Jackson"}
								role={"VP External"}
								linkedin={"https://linkedin.com/in/angela-bi-/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={placeholder}
								name={"Michelle Lin"}
								role={"Managing Director"}
								linkedin={"linkedin.com/in/m-ichellelin"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={rajvi}
								name={"Rajvi Rana"}
								role={"Director of Projects"}
								linkedin={"https://www.linkedin.com/in/rajvirana/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={placeholder}
								name={"Simran Singh"}
								role={"Director of Design"}
								linkedin={"https://linkedin.com"}
							/>
						</Col>
					</Row>
				</div>

				<div className="TeamContainer">
					<h5 className="HeaderStyle">
						<span className="Header">INTERNAL DEVELOPMENT</span>
					</h5>
					<Row>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={fiza}
								name={"Purnima Mehta"}
								role={"Designer"}
								linkedin={"https://linkedin.com/in/purnimamehta"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={jordan}
								name={"Jordan Janakievski"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/jordan-janakievski/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={placeholder}
								name={"Azamat Khamidov"}
								role={"Developer"}
								linkedin={"linkedin.com/in/azamat-khamidov/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={placeholder}
								name={"Mishaal Kandapath"}
								role={"Developer"}
								linkedin={"https://www.linkedin.com/in/mishaal-kandapath/"}
							/>
						</Col>
					</Row>
				</div>

				<div className="TeamContainer">
					<h5 className="HeaderStyle">
						<span className="Header">SHELTER MOVERS</span>
					</h5>
					<Row>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={michael}
								name={"Michael Jia"}
								role={"Project Manager"}
								linkedin={"https://linkedin.com/in/michaelzcjia"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={dakota}
								name={"Dakota McInnis"}
								role={"Project Lead"}
								linkedin={"https://linkedin.com/in/dakotamcinnis/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={tammy}
								name={"Tammy Taabassum"}
								role={"Designer"}
								linkedin={"https://linkedin.com/in/taamannae/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={anita}
								name={"Anita Xu"}
								role={"Designer"}
								linkedin={"https://linkedin.com/in/anita-xu/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={sakina}
								name={"Sakina Gadriwala"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/sakina-gadriwala-14b779156/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={dane}
								name={"Dane Gledhill"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/danegledhill/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={rayyana}
								name={"Rayyana Kambris"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/raykambris"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={amy}
								name={"Amy Peng"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/amy-p/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={samuel}
								name={"Samuel Moor-Smith"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/samuel-moor-smith"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={chihong}
								name={"Chi-Hong Cheung"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/cheung-chihong/"}
							/>
						</Col>
					</Row>
				</div>

				<div className="TeamContainer">
					<h5 className="HeaderStyle">
						<span className="Header">MERIT AWARD</span>
					</h5>
					<Row>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={trudie}
								name={"Trudie Cheung"}
								role={"Project Manager"}
								linkedin={"https://linkedin.com/in/trudiecheung/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={rishab}
								name={"Rishab Luthra"}
								role={"Project Lead"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={fiza}
								name={"Purnima Mehta"}
								role={"Designer"}
								linkedin={"https://linkedin.com/in/purnimamehta"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={baker}
								name={"Baker Jackson"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/baker-jackson/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={song}
								name={"Song You"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/songeunyou/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={alexander}
								name={"Alexander Shih"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/alexandershih2022/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={stella}
								name={"Stella Cai"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/stella-cai-77a526181/"}
							/>
						</Col>
						<Col xs={6} md={3} lg={2}>
							<About
								profile_img={sheree}
								name={"Sheree Zhang"}
								role={"Developer"}
								linkedin={"https://linkedin.com/in/shereezhang/"}
							/>
						</Col>
					</Row>
				</div>

				{/* <div className="TeamContainer">
          <h5 className="HeaderStyle">
            <span className="Header">VEEP</span>
          </h5>
          <Row>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQFfgALTSfZKkA/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=icO4OaJINPmK6W_6ozH9MVyAZWLD_Z8VF4kxPnedvbo"
                }
                name={"Tina Teng"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/tinateng/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={placeholder}
                name={"Michelle Lin"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/m-ichellelin"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4D03AQFeNG1D0VyHcQ/profile-displayphoto-shrink_400_400/0/1579634404068?e=1611792000&v=beta&t=3X1afiQGKvo1TxbQ0we_-IJakZHNigq_yAGgmobK8Fg"
                }
                name={"Mark JP Sanchez"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/mark-of-jp-5406/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={placeholder}
                name={"Zarif Mahmud"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/zarifmahmud/"}
              />
            </Col>
          </Row>
        </div> */}
			</div>

			{/* BOTTOM CONTAINER TEAM */}
			<Footer />
		</div>
	);
};

export default Team;
