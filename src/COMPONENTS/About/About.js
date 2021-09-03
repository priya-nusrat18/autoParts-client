import React from "react";
import {  Container, Row  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt, faPhone, faShippingFast, faTags } from "@fortawesome/free-solid-svg-icons";
import './About.css'

const About = () => {
  return (
    <section className="bg-white">
     
      <Container>
        <div className="d-flex justify-content-center py-4">
          <Row>
                <div className="d-flex align-items-center single-about col-md-3 col-sm-6 mb-2">
              <div>
                <FontAwesomeIcon
                  className="icon d-flex align-self-center"
                  icon={faPhone}
                />
              </div>

              <div>
                <p className='about-text'>Support 24/7
</p>
                <span className="text-muted about-span">Call us anytime</span>
              </div>
       

              </div>
              <div className="d-flex align-items-center single-about col-md-3 col-sm-6 mb-2">
              <div>
                <FontAwesomeIcon
                  className="icon d-flex align-self-center"
                  icon={faMoneyCheckAlt}
                />
              </div>

              <div>
                <p className='about-text'>100% Safety

</p>
                <span className="text-muted about-span">Only secure payments</span>
              </div>
              </div>
              <div className="d-flex align-items-center single-about col-md-3 col-sm-6 mb-2">
              <div>
                <FontAwesomeIcon
                  className="icon d-flex align-self-center"
                  icon={faTags}
                />
              </div>

              <div>
                <p className='about-text'>Hot Offers
</p>
                <span className="text-muted about-span">Discounts up to 90%</span>
              </div>
              </div>
              <div className="d-flex align-items-center single-about col-md-3 col-sm-6 mb-2">
              <div>
                <FontAwesomeIcon
                  className="icon d-flex align-self-center"
                  icon={faShippingFast}
                />
              </div>

              <div>
                <p className='about-text'>Free Shipping
</p>
                <span className="text-muted about-span">Knock us anytime</span>
              </div>
              </div>
              </Row>
              </div>
              </Container>
    </section>
  );
};

export default About;
