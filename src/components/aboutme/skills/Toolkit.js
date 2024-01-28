import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import pb from "../../../images/pb.png";
import tb from "../../../images/Tableau.png";
import aws from "../../../images/aws.jpg"
import dock from "../../../images/dock.png"
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import cb from "../../../images/cb.png";
import ps from "../../../images/pyspark.jpeg";
import sql from "../../../images/sql.png";
import excel from "../../../images/excel.png";
import jupyter from "../../../images/jupyter.png";
import azd from "../../../images/azd.png";
import chrome from "../../../images/chorme.svg";
import azure from "../../../images/Azure.png";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={vs} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={jupyter} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={azd} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={azure} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={git} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img
              src={github}
              alt=""
              style={{
                width: "85%",
                height: "85%",
                filter: "grayscale(1) invert(1)",
              }}
            />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={cb} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={sql} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={chrome} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={tb} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pb} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={dock} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={aws} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={ps} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={excel} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
