 import React, { Component } from 'react';
 import Navbar from 'react-bootstrap/Navbar';
 import Nav from 'react-bootstrap/Nav';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 class NavbarPage extends Component {
   render() {
     return (
       <Navbar collapseOnSelect expand="lg" className='nav'>
          <Navbar.Brand className="white" href="#home">NyumbaKumi</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className="white" href="#deets">Location</Nav.Link>
              <NavDropdown  id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Gitaru</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
              <FontAwesomeIcon className="white" icon="user"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>);
      }}

export default NavbarPage;
