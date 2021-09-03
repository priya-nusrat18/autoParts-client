import { Container } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import carSlide from "../../image/animateCar.png";
import Fade from "react-reveal/Fade";
import './HeaderAbout.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import Header from '../Header/Header'
import Footer from "../Footer/Footer";

const HeaderAbout = () => {
  return (
    <section className="">
        <Header></Header>
      <Container>
          <Row>
              <Col md={12}>
                  <div className="section-heading text-dark">
                      <h1 className="about-heading">FIND YOUR DREAM CAR FROM US</h1>
                      <hr />
                  </div>
              </Col>
          </Row>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <Fade left>
              <img src={carSlide} alt="" className="carSlide py-5" />
            </Fade>
          </Col>

          <Col md={6} sm={12} xs={12}>
            <div className="carSlide-text  py-5">
                <div className="carSlide-heading">
                    
              <h1 className=" text-left ">Find Your Dream Car</h1>
                </div>
              <span className="text-border"></span>
              <h5>
                Our CarSpot experts inspect the car on over 200 checkpoints so
                you get complete satisfaction and peace.
              </h5>
              <ul>
                <li className="d-flex">
                  <FontAwesomeIcon className="carslide-icon" icon={faHandPointRight} />
                  <span>Post your car's ad for free in 30 seconds.</span>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon className="carslide-icon" icon={faHandPointRight} />
                  <span>Get authentic offers from verified buyers.</span>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon className="carslide-icon" icon={faHandPointRight} />
                  <span>
                    Sell your car faster than others at a better price.
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </section>
  );
};

export default HeaderAbout;
