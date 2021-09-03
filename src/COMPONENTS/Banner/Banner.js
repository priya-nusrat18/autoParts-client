import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "../Header/Header";
import slider1 from "../../image/slide01.jpg";
import slider2 from "../../image/slide02.jpg";
import slider3 from "../../image/slide03.jpg";
import "./Banner.css";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <div className="banner">
      {" "}
      <Carousel>
        <Carousel.Item>
          <Header></Header>
          <img
            className="d-block carousel-img w-100"
            src={slider3}
            alt="First slide"
          />
          <Carousel.Caption>
            <Fade left>
              <h5 className="slide-text">CUSTOMIZE , MODIFY, UPGRADE, REPAIR, REPLACE</h5>
              <h1 className="slide-text">SELECT YOUR DREAM VEHICLE</h1>
              
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="">
          <Header></Header>
          <img
            className="d-block carousel-img w-100"
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <Fade left>
              <h5>TURBO AND SUPERCHARGERS</h5>
              <h1>POWER ADDERS SUPERCHARGERS</h1>
              
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="">
          <Header></Header>
          <img
            className=" carousel-img d-block w-100"
            src={slider1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Fade left>
              <h5> NEW ARRIVALS ACCESSORIES</h5>
              <h1>INTERIOR ACCESSORIES</h1>
              
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
