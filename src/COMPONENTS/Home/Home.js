import React from 'react';
import About from '../About/About';
import Addvertise from '../Addvertise/Addvertise';
import Banner from '../Banner/Banner';
import CarSlide from '../CarSlide/CarSlide';
import DealZone from '../DealZone/DealZone';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <CarSlide></CarSlide>
            <DealZone></DealZone>
            <Addvertise></Addvertise>
            <Footer></Footer>
        </div>
    );
};

export default Home;