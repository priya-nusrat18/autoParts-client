
import React from 'react';
import {Container , Col , Row } from 'react-bootstrap';
import './Addvertise.css'

const Addvertise = () => {
    return (
        <section className="my-5 py-5">
            <Container>
                <Row className="">
                    <Col md={6} sm={12} xs={12}>
                    <div className="hover-zoom one py-5  mb-3">
                        <div className="add-text-wrapper">
                        <h3 className='add-text mb-3 '>MOTOR OILS</h3>
                        <p className="add-p mb-4 text-white">Synthetic motor oil  with free shipping  <br /> Fiction free life guatanteed </p>
                        <button className="btn btn-danger text-white mb-4">Shop Now</button>
                        </div>
    </div>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                    <div className="hover-zoom2 two  py-5">
                    <div className="add-text-wrapper">
                    <h3 className='add-text mb-3 '>SAVE UP TO $40</h3>
                        <p className="add-p mb-4 text-white">Synthetic motor oil  with free shipping  <br /> Fiction free life guatanteed </p>
                        <button className="btn btn-danger text-white mb-4">Shop Now</button>
                    </div>
    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Addvertise;