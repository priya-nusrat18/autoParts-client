import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol/FooterCol';



const Footer = () => {
    const mainService = [
        {name: "Oil filter changed" , link: "/service"},
        {name: "Wiper blades replacement" , link: "/service"},
        {name: "Replace air filter" , link: "/service"},
        {name: "Scheduled maintenance" , link: "/service"}
    ]
    const ourAddress = [
        {name: "BOGUR-5800 , Bangladesh" , link: "//google.com/map"},
        {name: "Bogura-Sadar" , link: "//google.com/map"}
       
    ]
    const oralHealth = [
        {name: "Emergency Tires Repair" , link: "/service"},
        {name: "New tires" , link: "/servive"},
        {name: "Engine tune-up" , link: "/servive"},
        {name: "Brake work" , link: "/servive"}
    ]
    const services = [
        {name: "Emergency Battery replacement" , link: "/service"},
        {name: "Wheels aligned/balanced" , link: "/service"},
        {name: "Replace air filter" , link: "/service"},
        {name: "Antifreeze added Battery " , link: "/service"},
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Emergency Service"} menuItems={mainService}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Repair" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-call">+88013036530000</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved to Nusrat Priya</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;