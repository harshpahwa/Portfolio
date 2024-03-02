import React from "react";
import Card from "react-bootstrap/Card";
import { ImBubble, ImCamera, ImGoogle, ImLocation, ImPointRight } from "react-icons/im";
import { IoIosBasketball } from "react-icons/io";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsh Pahwa </span>
            <br />
            Currently, I'm on my path to earning a Bachelor of Technology in
            Computer Science and Engineering at the Indian Institute of
            Technology Mandi.
            <br />
            I've enriched my learning journey through three distinct
            internships, diving deep into software development, research, and
            technical leadership roles.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImLocation /> Travelling
            </li>
            <li className="about-activity">
              <ImCamera /> Photography
            </li>
            <li className="about-activity">
              <IoIosBasketball /> BasketBall
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
