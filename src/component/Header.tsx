import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../style/Header.css'
import {Link} from "react-router-dom";

const Header: React.FC = () => (
  <header>
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="#home" as={Link} to="/">
          <img src="src/assets/logo.png" alt="Logo" width="32"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="movies" className="link">Database</Nav.Link>
            <Nav.Link as={Link} to="add" className="link">Add</Nav.Link>
          </Nav>
          <Form className="d-flex me-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="dark"
              bsPrefix="custom-btn"
            >Search</Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="signin" className="link">Login</Nav.Link>
            <Nav.Link as={Link} to="signup" className="link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
