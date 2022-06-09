import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
	if (window.innerWidth < 480)
		return (
			<Container style={{ background: "#3E9CF3", padding: "3.5em 3.5em" }}>
				<Row>
					<h1 className={"MobileFooterTitle"}>Contact Us!</h1>
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
				<Col>
					<h4 className={"FooterTitle"}>Contact Us!</h4>
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

export default Footer;
