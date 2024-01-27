import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Faiza Siddiqui </b> 
                  and I am a <b className="purple"> Data Scientist </b> 
                    with MSc in Data Science from <b className="purple">University of Regina </b>
                      in Canada.
                <br />
                <br />
                        I am proficient in &nbsp;
                  <b className="purple">
                    {""}
                  Python, Machine learning, Data Analysis, Data Visualization, Tableau, Databricks and Azure.{" "}
                  </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;

                  <b className="purple">
                    {""}
                    Scikit-learn, Spark, Streamlit, Pandas, NumPy, Keras, TensorFlow, PyTorch {" "}
                  </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for learning
                 &nbsp;
                  <b className="purple">
                    {""}
                    new tools especially related to AI.
                  </b>
                <br />
                <br />In my free time, I enjoy learning new technologies and&nbsp;
                  <b className="purple">exploring advancements in the field of artificial intelligence and machine learning. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
