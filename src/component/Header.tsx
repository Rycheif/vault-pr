import React, {useContext} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Form as RouterForm, Link} from 'react-router-dom';

import '../style/Header.css'
import UserContext from "../context/UserContext";
import {Icon} from "@iconify/react";
import {NavDropdown} from "react-bootstrap";

const Header: React.FC = () => {
  const context = useContext(UserContext);
  return (
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
              {context.user
                ? <Nav.Link as={Link} to="add" className="link">Add</Nav.Link>
                : null
              }
            </Nav>
            {context.user
              ? <Nav>
                <NavDropdown
                  title={<Icon icon="fe:user" className="icon"/>}
                  id="navbarScrollingDropdown">
                  <NavDropdown.Item className="login-dropdown-item">
                    {context.user.name}
                  </NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <RouterForm
                    className="logout-item"
                    action="logout"
                    method="delete">
                    <NavDropdown.Item
                      className="logout-item"
                      as={Button}
                      type="submit">
                      Logout
                    </NavDropdown.Item>
                  </RouterForm>
                </NavDropdown>
              </Nav>
              : <Nav>
                <Nav.Link as={Link} to="signin" className="link">Login</Nav.Link>
                <Nav.Link as={Link} to="signup" className="link">Register</Nav.Link>
              </Nav>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
