import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
  AiFillFileWord,
  AiFillCode,
  AiFillCodeSandboxCircle,
  AiFillCodepenCircle,
  AiFillWeiboCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey! I'm Harsh, a 3rd year Computer Science student at IIT Mandi.
              I love diving into the world of coding and tech.
              <br />
              <br />I am fluent in programming languages like
              <i>
                <b className="purple"> C++, Python and Javascript. </b>
              </i>
              <br />
              <br />I have an experience of{" "}
              <b className="purple">3 internships.</b>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">AI & Machine Learning</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br />
        <br />
        <Col md={12} className="home-about-social">
          <h1>EXPERIENCE</h1>
          {/* existing code */}
        </Col>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(118 0 173)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(118 0 173)" }}
            date="Sept 2022 - Nov 2022"
            iconStyle={{ background: "rgb(118 0 173)", color: "#fff" }}
            icon={<AiFillCode />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer Internship
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Mazinda</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(118 0 173)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(118 0 173)" }}
            date="June 2023 - July 2023"
            iconStyle={{ background: "rgb(118 0 173)", color: "#fff" }}
            icon={<AiFillCode />}
          >
            <h3 className="vertical-timeline-element-title">
              ML Research Internship
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Dr Parimala</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(118 0 173)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(118 0 173)" }}
            date="Dec 2023 - April 2024"
            iconStyle={{ background: "rgb(118 0 173)", color: "#fff" }}
            icon={<AiFillCode />}
          >
            <h3 className="vertical-timeline-element-title">
              Tech Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle"> Kisanlink</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <br />
        <br />
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/harshpahwa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harshpahwa74/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME</h1>
            <div className="contact-details">
              <div className="contact-icon">
                <AiFillMail />
              </div>
              <p>b21100@students.iitmandi.ac.in</p>
            </div>
            <div className="contact-details">
              <div className="contact-icon">
                <AiFillPhone />
              </div>
              <p>+91 8630950002</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
