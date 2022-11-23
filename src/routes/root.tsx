import React from 'react';
import Header from "../component/Header";
import {Outlet} from "react-router-dom";
import Footer from "../component/Footer";

const Root: React.FC = () => (
  <div className="wrapper">
    <Header/>
    <Outlet/>
    <Footer />
  </div>
);

export default Root;
