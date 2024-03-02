import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiAmazon,
  SiAmazonec2,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const techStack = [
    { icon: CgCPlusPlus, name: "C++" },
    { icon: DiJavascript1, name: "JavaScript" },
    { icon: DiPython, name: "Python" },
    { icon: DiNodejs, name: "Node.js" },
    { icon: DiReact, name: "React" },
    { icon: DiMongodb, name: "MongoDB" },
    { icon: DiGit, name: "Git" },
    { icon: DiJava, name: "Java" },
    { icon: SiAmazonec2, name: "Firebase" },
    { icon: SiFirebase, name: "Firebase" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech) => (
        <Col xs={4} md={2} className="tech-icons">
          <tech.icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
