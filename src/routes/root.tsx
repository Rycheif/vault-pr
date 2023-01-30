import React from 'react';
import Header from "../component/Header";
import {Outlet} from "react-router-dom";
import Footer from "../component/Footer";
import Container from "react-bootstrap/Container";

const Root: React.FC = () => (
  <Container fluid={true} style={{backgroundColor: "#242424fa"}}>
    <Container
      className="min-vh-100 pt-5"
      style={{backgroundColor: "#242424"}}>
      <Header/>
      <main
        className="container min-vh-100"
        style={{marginTop: "61px"}}>
        <Outlet/>
      </main>
      <Footer/>
    </Container>
  </Container>
);

export default Root;
