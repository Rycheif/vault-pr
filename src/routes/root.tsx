import React from 'react';
import Header from "../component/Header";
import {Outlet} from "react-router-dom";
import Footer from "../component/Footer";

const Root: React.FC = () => (
  <div className="d-flex flex-column justify-content-center min-vh-100" style={{backgroundColor: "#242424"}}>
    <Header/>
    <main className="flex-grow-1 flex-shrink-1 justify-content-center" style={{marginTop: "61px"}}>
      <Outlet/>
    </main>
    <Footer/>
  </div>
);

export default Root;
