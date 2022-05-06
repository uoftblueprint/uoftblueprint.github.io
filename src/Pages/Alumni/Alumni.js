import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import { Row, Col } from "react-bootstrap";
import alumni_data from "./Alumni.json";

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
			<Banner />
			<div className="container">
				<div className="TeamContainer">
					<h5 className="HeaderStyle">
						<span className="Header">Alumni</span>
					</h5>
					<p>
						Special thanks to all of our alumni who have given their time and
						effort to our cause for social good. We couldn't have done it
						without you!
					</p>
					<Row>{Member()}</Row>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Team;
