import React from "react";
import About from "./Components/About";
import { Container, Row, Col } from "react-bootstrap";

const IMG = "https://via.placeholder.com/100";
const ANTOINE = "https://media-exp1.licdn.com/dms/image/C5603AQERSjsNVOI6cg/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=HOnA7VMQbu-HoXdRAHhDkMHb2Hzv5HxfvHzrprlxqqo";

const Team = () => {
  return (
    <div class="container">
      <h3 className="TeamTitle">Meet Our Team</h3>
      <div className="TeamContainer">
        <h5 className="HeaderStyle">
          <span className="Header">EXECUTIVE TEAM</span>
        </h5>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={ANTOINE}
              name={"Antoine Finot"}
              role={"President"}
              linkedin={"https://linkedin.com/in/antoine-f/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={"https://media-exp1.licdn.com/dms/image/C4E03AQHznrYYS4F3hA/profile-displayphoto-shrink_400_400/0/1597105774791?e=1611792000&v=beta&t=z7KplyJr554teK_PuGO2b4IH6J8mO_k5tTbd5k9O8ys"}
              name={"Angela Bi"}
              role={"VP External"}
              linkedin={"https://linkedin.com/in/angela-bi-/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={"https://media-exp1.licdn.com/dms/image/C5603AQHEG5tvMithXg/profile-displayphoto-shrink_400_400/0/1579562506855?e=1611792000&v=beta&t=ls2bTuPl9A7iKnVBFIVhChjidjDUMk5uf3Slzd1MOdc"}
              name={"Karen Zhao"}
              role={"VP Internal"}
              linkedin={"https://linkedin.com/in/karenjyzhao"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={"https://media-exp1.licdn.com/dms/image/C5603AQGPEFE-4i6udg/profile-displayphoto-shrink_400_400/0/1552299742135?e=1611792000&v=beta&t=yoLV-L6_JA32IUVq5kclxMD9_9jag-VlQFpwH_bMOdI"}
              name={"Windsor Huang"}
              role={"VP Finance"}
              linkedin={"https://linkedin.com/in/windsorhuang/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={"https://media-exp1.licdn.com/dms/image/C5603AQHMaBwyDQwDtA/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=Ytgwweh2T3_OmHHU41UgfG37G-lfQldMvXibSIw5XN8"}
              name={"Olivia Li"}
              role={"Director of Projects"}
              linkedin={"https://linkedin.com/in/oliviaoli/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={"https://media-exp1.licdn.com/dms/image/C5603AQGonjCdZJiyYA/profile-displayphoto-shrink_400_400/0/1575409896752?e=1611792000&v=beta&t=WcpYh9EXTQ3UwUBY12-e_bL_Ou7hb0x4Ut8kf2f57Bk"}
              name={"Ling Lu"}
              role={"Director of Design"}
              linkedin={"https://linkedin.com/in/ling-l-b4982288/"}
            />
          </Col>
        </Row>
      </div>

      <div className="TeamContainer">
        <h5 className="HeaderStyle">
          <span className="Header">INTERNAL TEAM</span>
        </h5>
        <Row>
          <Col xs={12} md={3} lg={2}>
          <About profile_img={"https://media-exp1.licdn.com/dms/image/C5603AQGPEFE-4i6udg/profile-displayphoto-shrink_400_400/0/1552299742135?e=1611792000&v=beta&t=yoLV-L6_JA32IUVq5kclxMD9_9jag-VlQFpwH_bMOdI"} name={"Windsor Huang"} role={"Project Manager"} 
            linkedin={"https://linkedin.com/in/windsorhuang/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
          <About profile_img={"https://media-exp1.licdn.com/dms/image/C4D03AQHKNv-3M1yZCQ/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=1RumMh3UGMB7okBY0m2CKy8ryBTIcVRkrSnWlOrXx2U"} name={"Varun Lodaya"} role={"Developer"} 
            linkedin={"https://linkedin.com/in/varun-lodaya/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
          <About profile_img={"https://media-exp1.licdn.com/dms/image/C4D03AQHyCtOh6EnoKw/profile-displayphoto-shrink_400_400/0/1600198498959?e=1611792000&v=beta&t=Q94GK7xrYeC88HMMlxuf4p2PrzE4W-tyJ_MMzFIvIAU"} name={"Rajvi Rana"} role={"Developer"} 
            linkedin={"https://www.linkedin.com/in/rajvirana/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
          <About profile_img={"https://media-exp1.licdn.com/dms/image/C5603AQG9he6PsQOw0g/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=celZcQNJQsrxCQ5hHQKilWZNzB4YZzN6zm7ShAAcseQ"} name={"Elena Wang"} role={"Developer"} 
            linkedin={"https://linkedin.com/in/elenawzy/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
          <About profile_img={"https://media-exp1.licdn.com/dms/image/C4E03AQE43_TmFAeAqQ/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=Q9PDMEXxi1_6pfsXUg62uDwS24583pF95rFoHCazS-Y"} name={"Kevin Zhu"} role={"Developer"} 
            linkedin={"https://linkedin.com/in/kevin-zhu-732019175/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
          <About profile_img={"https://media-exp1.licdn.com/dms/image/C4E03AQHGzycd8rVXEw/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=HIIaRKpuANYqu0teZtMpShRA0UMKkuW2O4azoW-GoOQ"} name={"Jacky Yang"} role={"Developer"} 
            linkedin={"https://linkedin.com/in/jyangcs/"}
            />
          </Col>
        </Row>
      </div>

      <div className="TeamContainer">
        <h5 className="HeaderStyle">
          <span className="Header">SHELTER MOVERS</span>
        </h5>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Michael Jia"}
              role={"Project Manager"}
              linkedin={"https://linkedin.com/in/michaelzcjia"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Dakota McInnis"}
              role={"Project Lead"}
              linkedin={"https://linkedin.com/in/dakotamcinnis/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Tammy Taabassum"}
              role={"Designer"}
              linkedin={"https://linkedin.com/in/taamannae/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Anita Xu"} role={"Designer"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Sakina Gadriwala"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/sakina-gadriwala-14b779156/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Dane Gledhill"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/danegledhill/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Rayyana Kambris"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/raykambris"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Amy Peng"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/amy-p/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
              name={"Samuel Moor-Smith"}
              role={"Developer"}
              linkedin={"https://linkedin.com/in/samuel-moor-smith"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About
              profile_img={IMG}
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
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Trudie Cheung"} role={"Project Manager"} 
            linkedin={"https://linkedin.com/in/trudiecheung/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Rishab Luthra"} role={"Project Lead"} 
            linkedin={"https://linkedin.com/in/rishabluthra"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Purnima Mehta"} role={"Designer"} 
            linkedin={"https://linkedin.com/in/purnimamehta"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Antoine Finot"} role={"Developer"} 
            linkedin={"https://linkedin.com/in/antoine-f/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Baker Jackson"} role={"Developer"} 
            linkedin={"https://linkedin.com/in/baker-jackson/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Song You"} role={"Developer"} 
            linkedin={"https://linkedin.com/in/songeunyou/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Alexander Shih"} role={"Developer"} 
            linkedin={"https://linkedin.com/in/alexandershih2022/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Stella Cai"} role={"Developer"} 
            linkedin={"https://linkedin.com/in/stella-cai-77a526181/"}
            />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Sheree Zhang"} role={"Developer"} 
            linkedin={"https://linkedin.com/in/shereezhang/"}
            />
          </Col>
        </Row>
      </div>

      <div className="TeamContainer">
        <h5 className="HeaderStyle">
          <span className="Header">VEEP</span>
        </h5>
        <Row>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Elena"} role={"Best Human"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Rajvi"} role={"Also Best Human"} />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <About profile_img={IMG} name={"Varun"} role={"Best Boi"} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Team;
