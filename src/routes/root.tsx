import React from 'react';
import Header from "../component/Header";
import {Outlet} from "react-router-dom";
import Footer from "../component/Footer";

const Root: React.FC = () => (
  <div className="vh-100 overflow-auto" style={{backgroundColor: "#242424"}}>
    <Header/>
    <main className="d-flex justify-content-center">
      <Outlet/>
    </main>
    <Footer/>
  </div>
);

export default Root;
