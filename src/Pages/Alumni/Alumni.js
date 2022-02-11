import React from "react";
import About from "./Components/About";
import { Container, Row, Col, Button } from "react-bootstrap";
import alumni_data from "./Alumni.json";

const Footer = () => {
	if (window.innerWidth < 480)
		return (
			<Container style={{ background: "#3E9CF3", padding: "3.5em 3.5em" }}>
				<Row>
					<h1 className={"MobileFooterTitle"}>Contact Us</h1>
				</Row>
				<Row>
					<p className={"MobileFooterBody"}>
						We are looking for non-profits who are in need of technological
						solutions, as well as partners interested in supporting us and our
						cause.
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
						<p className="Copyright">@ Blueprint 2022.</p>
					</div>
				</Container>
			</Container>
		);
	return (
		<div className="BottomContainer">
			<Row>
				<Col md="6">
					<h4 className={"FooterTitle"}>Contact Us</h4>
					<p className={"FooterBody"}>
						We are looking for non-profits who are in need of technological
						solutions, as well as partners interested in supporting us and our
						cause.
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

const Member = () => {
	let members = [];
	for (let member in alumni_data) {
		members.push(
			<Col xs={6} md={3} lg={2}>
				<About
					profile_img={alumni_data[member].image}
					name={member}
					role={alumni_data[member].role}
					linkedin={alumni_data[member].linkedin}
				/>
			</Col>
		);
	}
	let membersList = members.map(function (member) {
		return member;
	});
	return membersList;
};

const Team = () => {
	return (
		<div>
			<div className="container">
				<div className="TeamContainer">
					<h5 className="HeaderStyle">
						<span className="Header">Alumni</span>
					</h5>
					<p>
						<b>
							Special thanks to all of our alumni who have given their time and
							effort to our cause for social good. We couldn't have done it
							without you!
						</b>
					</p>
					<Row>{Member()}</Row>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Team;
