import React from "react";
import About from "./Components/About";
import { Container, Row, Col, Image } from "react-bootstrap";
import placeholder from "./Images/placeholder.JPG";
import heart from "./Images/heart.png";

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
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQERSjsNVOI6cg/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=HOnA7VMQbu-HoXdRAHhDkMHb2Hzv5HxfvHzrprlxqqo"
                }
                name={"Antoine Finot"}
                role={"President"}
                linkedin={"https://linkedin.com/in/antoine-f/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4E03AQHznrYYS4F3hA/profile-displayphoto-shrink_400_400/0/1597105774791?e=1611792000&v=beta&t=z7KplyJr554teK_PuGO2b4IH6J8mO_k5tTbd5k9O8ys"
                }
                name={"Angela Bi"}
                role={"VP External"}
                linkedin={"https://linkedin.com/in/angela-bi-/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQHEG5tvMithXg/profile-displayphoto-shrink_400_400/0/1579562506855?e=1611792000&v=beta&t=ls2bTuPl9A7iKnVBFIVhChjidjDUMk5uf3Slzd1MOdc"
                }
                name={"Karen Zhao"}
                role={"VP Internal"}
                linkedin={"https://linkedin.com/in/karenjyzhao"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQGPEFE-4i6udg/profile-displayphoto-shrink_400_400/0/1552299742135?e=1611792000&v=beta&t=yoLV-L6_JA32IUVq5kclxMD9_9jag-VlQFpwH_bMOdI"
                }
                name={"Windsor Huang"}
                role={"VP Finance"}
                linkedin={"https://linkedin.com/in/windsorhuang/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQHMaBwyDQwDtA/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=Ytgwweh2T3_OmHHU41UgfG37G-lfQldMvXibSIw5XN8"
                }
                name={"Olivia Li"}
                role={"Director of Projects"}
                linkedin={"https://linkedin.com/in/oliviaoli/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQGonjCdZJiyYA/profile-displayphoto-shrink_400_400/0/1575409896752?e=1611792000&v=beta&t=WcpYh9EXTQ3UwUBY12-e_bL_Ou7hb0x4Ut8kf2f57Bk"
                }
                name={"Ling Lu"}
                role={"Director of Design"}
                linkedin={"https://linkedin.com/in/ling-l-b4982288/"}
              />
            </Col>
          </Row>
        </div>

        <div className="TeamContainer">
          <h5 className="HeaderStyle">
            <span className="Header">INTERNAL DEVELOPMENT</span>
          </h5>
          <Row>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQGPEFE-4i6udg/profile-displayphoto-shrink_400_400/0/1552299742135?e=1611792000&v=beta&t=yoLV-L6_JA32IUVq5kclxMD9_9jag-VlQFpwH_bMOdI"
                }
                name={"Windsor Huang"}
                role={"Project Manager / Project Lead"}
                linkedin={"https://linkedin.com/in/windsorhuang/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4D03AQHKNv-3M1yZCQ/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=1RumMh3UGMB7okBY0m2CKy8ryBTIcVRkrSnWlOrXx2U"
                }
                name={"Varun Lodaya"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/varun-lodaya/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4D03AQHyCtOh6EnoKw/profile-displayphoto-shrink_400_400/0/1600198498959?e=1611792000&v=beta&t=Q94GK7xrYeC88HMMlxuf4p2PrzE4W-tyJ_MMzFIvIAU"
                }
                name={"Rajvi Rana"}
                role={"Developer"}
                linkedin={"https://www.linkedin.com/in/rajvirana/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQG9he6PsQOw0g/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=celZcQNJQsrxCQ5hHQKilWZNzB4YZzN6zm7ShAAcseQ"
                }
                name={"Elena Wang"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/elenawzy/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4E03AQE43_TmFAeAqQ/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=Q9PDMEXxi1_6pfsXUg62uDwS24583pF95rFoHCazS-Y"
                }
                name={"Kevin Zhu"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/kevin-zhu-732019175/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4E03AQHGzycd8rVXEw/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=HIIaRKpuANYqu0teZtMpShRA0UMKkuW2O4azoW-GoOQ"
                }
                name={"Jacky Yang"}
                role={"Developer"}
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
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4E03AQE0JKb1H5z9ag/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=jdp-NC2Z7O2tv1JGGhia392gHCrsyJWeWgJK1meSfVQ"
                }
                name={"Michael Jia"}
                role={"Project Manager"}
                linkedin={"https://linkedin.com/in/michaelzcjia"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQHHVDmkyRnTzw/profile-displayphoto-shrink_400_400/0/1537879473606?e=1611792000&v=beta&t=qiY62Jj_1W2IQloEu0PbGlBBWoaOsBrCLnVJHMmMSgo"
                }
                name={"Dakota McInnis"}
                role={"Project Lead"}
                linkedin={"https://linkedin.com/in/dakotamcinnis/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQHgJAl5bTl-iQ/profile-displayphoto-shrink_400_400/0/1587351527649?e=1611792000&v=beta&t=0toZeTlmYoX7oRlA5uX9FsesGbqN6oNo0ZqUB1yWF8E"
                }
                name={"Tammy Taabassum"}
                role={"Designer"}
                linkedin={"https://linkedin.com/in/taamannae/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4E03AQFHi70WfVD0Sw/profile-displayphoto-shrink_400_400/0/1604352087543?e=1611792000&v=beta&t=8jE50DAZyaeykbss25BHl9UYs6YIjh1zZjo7aKX1gpE"
                }
                name={"Anita Xu"}
                role={"Designer"}
                linkedin={"https://linkedin.com/in/anita-xu/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4D03AQEPCT_g4aCDWg/profile-displayphoto-shrink_400_400/0/1544303241065?e=1611792000&v=beta&t=vRLxFEpCprBvDLNttJVb7JuSaFTjatKn_W-xCZWPp4w"
                }
                name={"Sakina Gadriwala"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/sakina-gadriwala-14b779156/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4E03AQHZUo-pOs9Rig/profile-displayphoto-shrink_400_400/0/1596739438037?e=1611792000&v=beta&t=0DvxCB2xq3Aa_L3IC1RSy5sVfWdtNc0Z5wzLkf8ioSQ"
                }
                name={"Dane Gledhill"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/danegledhill/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQFW1_fOL_PfPQ/profile-displayphoto-shrink_400_400/0/1595118555197?e=1611792000&v=beta&t=GLuszGF0BNBBxs6lQLFECxnQmTCDQCgI35dKX8-kXtA"
                }
                name={"Rayyana Kambris"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/raykambris"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQGmVD-sU_UI0g/profile-displayphoto-shrink_400_400/0/1587680978852?e=1611792000&v=beta&t=HG21KxpsT7TAS8Nf2G4uRfj_5CTlLwoeuEvjZW9q0IY"
                }
                name={"Amy Peng"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/amy-p/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4E03AQGhQADpVyCXTg/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=-eHyDbzPQB89hPr49z0_ZWk6srMUyWQQQAQ4J38fehs"
                }
                name={"Samuel Moor-Smith"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/samuel-moor-smith"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4E03AQHGepLDcYoY4A/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=U9gBD9oL_Iqa-sjdf68Judhkj9lxDP22Sv0EP5k6E6Y"
                }
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
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4D03AQHUKKx4n3DLyg/profile-displayphoto-shrink_400_400/0/1526271577465?e=1611792000&v=beta&t=IA84KOrPNOUt0a3FuRCtcOLh-gD49nwpwiZJnLBehNA"
                }
                name={"Trudie Cheung"}
                role={"Project Manager"}
                linkedin={"https://linkedin.com/in/trudiecheung/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQH1A3mr-Jbqbg/profile-displayphoto-shrink_400_400/0/1590598201454?e=1611792000&v=beta&t=5djtIfnMvdsu64u79-ndhNLFB5en71p7RGSvwpmL4RA"
                }
                name={"Rishab Luthra"}
                role={"Project Lead"}
                linkedin={"https://linkedin.com/in/rishabluthra"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={placeholder}
                name={"Purnima Mehta"}
                role={"Designer"}
                linkedin={"https://linkedin.com/in/purnimamehta"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4D03AQHDaLtYF--JrA/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=V23FG8JrDUqKz8aK_amz5-YE6-XUaOa56zggf1qW0ZM"
                }
                name={"Baker Jackson"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/baker-jackson/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={placeholder}
                name={"Song You"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/songeunyou/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C4D03AQE-tPMgsfyfFw/profile-displayphoto-shrink_400_400/0/1546187491813?e=1611792000&v=beta&t=v_Zj6pIOqAsywM0Zj7cwiD9BuamIbF-if-8uRfVwANY"
                }
                name={"Alexander Shih"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/alexandershih2022/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQH9HpX7uIsTAg/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=O25xaCViSyn-EWxa6SA_vAxWDPt82l0bqRq5QhIx1EI"
                }
                name={"Stella Cai"}
                role={"Developer"}
                linkedin={"https://linkedin.com/in/stella-cai-77a526181/"}
              />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <About
                profile_img={
                  "https://media-exp1.licdn.com/dms/image/C5603AQE7PUf-3dhkgQ/profile-displayphoto-shrink_400_400/0/1553031632520?e=1611792000&v=beta&t=8I5PHdU9ulpgOuyo2PcPjMsBgAC_qhEOS5si3x9MFDc"
                }
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
      <div className="BottomContainer">
        <Row>
          <Col md="auto" style={{ paddingLeft: '5vw' }}>
            <Image style={{ paddingTop: '1em', width: '6em', height: 'auto' }} src={heart} />
          </Col>
          <Col md="6">
            <h4 className={'FooterTitle'}>Wanna join the team?</h4>
            <p className={'FooterBody'}>
              We are looking for non-profits who are in need of technological
              solutions, as well as partners interested in supporting us and our
              cause. Feel free to contact us for any inquiries!
            </p>
          </Col>
          <Col>
            <a href="mailto:contact@uoftblueprint.org">
              <button className="contact-button BottomButton">contact@uoftblueprint.org</button>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Team;
