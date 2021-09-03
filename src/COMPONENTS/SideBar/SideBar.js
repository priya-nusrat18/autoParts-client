import React  from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt, faHome,faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'
import {  Navbar } from "react-bootstrap";
import logo from '../../image/logo.png'


const Sidebar = () => {
 

    return (
           
        <div className="sidebar  col-md-2 col-sm-2 col-2 px-4" style={{ height: "100vh" }}>
             <Navbar.Brand as={Link} to="/">
          {" "}
          <img className='logo-admin ' src={logo} alt="" /> {" "}
        </Navbar.Brand>
            <ul className="list-unstyled">
                <li>
                    <Link to="/manage" className="text-white">
                        <FontAwesomeIcon icon={faTasks} /> <span>Manage Product</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>AddProduct</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
            </ul>
            <div>
            <ul className="list-unstyled">
                <li>
                <Link to="/" className="text-white logout"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;