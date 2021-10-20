import { Container, Row, Col, Spinner } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./DealZone.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DealProductCard from "./DealProductCard/DealProductCard";

const DealZone = () => {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("https://immense-dawn-60980.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const getData = data.slice(12, 21);
        console.log(getData);
        setProducts(getData);
        setSpinner(false);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section >
      <Container fluid className="bg-section">
        <Row>
          <Col md={12}>
            <div className="section-heading  mb-5">
              <h1 className="text-white">ATTENTION! DEAL ZONE</h1>
              <h5 className="text-white">Hurry up! Discounts up to 70%</h5>
            </div>

            <hr></hr>
          </Col>
        </Row>
        {spinner ? <Spinner  className="mt-3 mb-3 d-flex justify-content-center"  variant="success"> <span >Loading...</span></Spinner> 
                
                        :
        <Row >
          <Carousel responsive={responsive}>
          {
                        products.map(product => <DealProductCard product={product} key={product._id}></DealProductCard>)
                    }
          </Carousel>
         
        </Row>
        }
      </Container>
    </section>
  );
};

export default DealZone;
