import React, { useContext } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import logo from "../../image/logo.png"
import "./Header.css";

const Header = () => {
  const [ loggedInUser] =useContext(UserContext)
  const {googleName, displayName,  isSignedIn}=loggedInUser;
  console.log(loggedInUser.displayName);
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {" "}
          <img className='logo' src={logo} alt="" /> {" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/order">Orders</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            {/* <Nav.Link as={Link} to="/login" className="login-btn">
                Log In
            </Nav.Link> */}

            <Nav.Link as={Link} to="/login" className="login-btn">
              {isSignedIn ? displayName || googleName || 'Log out' : 'Log in' }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;