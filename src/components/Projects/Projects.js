import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amrti from "../../Assets/Projects/amrti.png";
import soil from "../../Assets/Projects/soil.png";
import abaya from "../../Assets/Projects/abaya.png";
import gesture from "../../Assets/Projects/gesture.jpg";
import comp from "../../Assets/Projects/comp.png";
import heal from "../../Assets/Projects/Heal.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amrti}
              isBlog={false}
              title="Amrti"
              description="Amriti is a dynamic full-stack e-commerce platform developed with the MERN stack during my internship at Kisanlink. It features user authentication, product management, and secure transactions, showcasing my ability to deliver comprehensive and user-friendly digital solutions."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://amrti.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soil}
              isBlog={false}
              title="SoilSense"
              description="Developed a soil classification system using CNN and image processing to classify soil based on the input
image and to help the farmers make a better crop choice. Implemented it using Python with Flask and developed the frontend. Build as a part of Code For Good Hackathon."
              ghLink="https://github.com/harshpahwa/Soil_Sense"
              demoLink="https://www.youtube.com/watch?v=DF6vM2sE5QA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abaya}
              isBlog={false}
              title="AbayaKrishi Website"
              description="A static website crafted for the farmer producer organization Abayakrishi, highlighting their products and services. Developed using HTML, CSS, and JavaScript, this project underscores my proficiency in creating visually appealing websites that effectively communicate the organization's mission and offerings"
              ghLink=""
              demoLink="https://abayakrishi.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gesture}
              isBlog={false}
              title="VoiceGesture Communicator"
              description="It  enhances communication by merging speech-to-text and gesture-to-text technologies into a seamless interface, deployed on Raspberry Pi as a part of my Reasearch Internship. Utilizing the Vosk model for Indian English recognition, this Python-based project showcases my skills in developing accessible, innovative solutions and problem-solving."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comp}
              isBlog={false}
              title="Complaint Management System:"
              description="Built a complete Complaint Management System for students using MongoDB, Node.js, Express.js,
Passport.js, html, css, and javascript. Includes user registration, complaint filing, status tracking, email
notifications via Nodemailer, and an admin interface for resolution of the complaints and to provide feedback to the students."
              ghLink="https://github.com/harshpahwa/Complaint-management-system-CS207"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heal}
              isBlog={false}
              title="HEAL"
              description="Achieved 2nd place in a major hackathon, showcasing our AI-driven platform for diagnosing health issues. Developed by our team using Python and Flask, it assists in detecting diseases from brain tumors to heart conditions. HEAL exemplifies our skill in creating impactful, technology-enhanced healthcare solutions."
              ghLink="https://github.com/harshpahwa/HEAL"
              demoLink="https://www.youtube.com/watch?v=PTjIp2hYMxQ"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
