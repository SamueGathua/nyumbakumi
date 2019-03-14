import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Footer extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className='nav'>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Nav className="white">@2019 NyumbaKumi.inc</Nav>
       </Navbar>);
     }}

export default Footer;
