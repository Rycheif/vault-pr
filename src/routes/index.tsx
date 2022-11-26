import React from "react";
import { Icon } from '@iconify/react';

import "../style/index.css"

const Index: React.FC = () => (
  <div className="hero d-flex flex-column">
    <section className="d-flex flex-row flex-wrap justify-content-evenly">
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, iste.</h1>
        <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, iste.</p>
      </div>
      <div className="hero-image d-flex my-5">
        <img src="src/assets/vectorpaint.png" alt="Vault"/>
      </div>
    </section>
    <section className="mt-5 grid-wrapper text-light">
      <div className="grid-item">
        <article className="bg-dark">
          <div className="text-center pb-3"><Icon icon="cil:paper-plane" style={{ fontSize: '36px' }} /></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nisi?</p>
        </article>
      </div>
      <div className="grid-item">
        <article className="bg-dark">
          <div className="text-center pb-3"><Icon icon="cil:paper-plane" style={{ fontSize: '36px' }} /></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nisi?</p>
        </article>
      </div>
      <div className="grid-item">
        <article className="bg-dark">
          <div className="text-center pb-3"><Icon icon="cil:paper-plane" style={{ fontSize: '36px' }} /></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nisi?</p>
        </article>
      </div>
      <div className="grid-item">
        <article className="bg-dark">
          <div className="text-center pb-3"><Icon icon="cil:paper-plane" style={{ fontSize: '36px' }} /></div>Index page - m
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nisi?</p>
        </article>
      </div>
    </section>
  </div>
);

export default Index;
