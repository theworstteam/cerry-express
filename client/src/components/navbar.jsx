import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>Curry Express</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Home</Nav.Link>
        <NavDropdown title='Months' id='basic-nav-dropdown'>
          <NavDropdown.Item href='#action/3.1'>January</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>February</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3'>March</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Navbar.Text>
        Signed in as: <a href='#login'>kimvcp</a>
      </Navbar.Text>
    </Navbar>
  );
};

export default NavBar;
