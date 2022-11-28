import React from "react";
import {Icon} from '@iconify/react';

import "../style/index.css"
import {Link} from "react-router-dom";

const Index: React.FC = () => (
  <div className="hero d-flex flex-column align-items-center">
    <section className="d-flex flex-row flex-wrap">
      <div className="d-flex flex-column justify-content-center" style={{flex: 1}}>
        <h1 className="fw-bold display-1 mb-4">Vault</h1>
        <p style={{fontSize: "1.5rem"}}>Movie database created and maintained by the
          community</p>
      </div>
      <div className="hero-image d-flex my-5" style={{flex: 1}}>
        <img src="src/assets/vectorpaint.png" alt="Vault"/>
      </div>
    </section>
    <section className="mt-5 grid-wrapper text-light">
      <div className="grid-item">
        <article className="bg-dark">
          <div className="text-center pb-3"><Icon icon="fe:plus" style={{fontSize: '36px', color: "#598ea0"}}/>
          </div>
          <h2>Create</h2>
          <p>Did you find a movie that doesn't exist in the database? Just add it!</p>
        </article>
      </div>
      <div className="grid-item">
        <article className="bg-dark">
          <div className="text-center pb-3"><Icon icon="fe:pencil" style={{fontSize: '36px', color: "#598ea0"}}/>
          </div>
          <h2>Edit</h2>
          <p>You can easily update data about any movie in the database to keep it up to date</p>
        </article>
      </div>
      <div className="grid-item">
        <article className="bg-dark">
          <div className="text-center pb-3"><Icon icon="fe:search" style={{fontSize: '36px', color: "#598ea0"}}/>
          </div>
          <h2>Browse</h2>
          <p>Find a movie that you are interested in or se what is popular now</p>
        </article>
      </div>
      <div className="grid-item">
        <article className="bg-dark">
          <div className="text-center pb-3"><Icon icon="fe:login" style={{fontSize: '36px', color: "#598ea0"}}/>
          </div>
          <h2>Join</h2>
          <p>Interested? Join our community: <Link to="#">Register</Link></p>
        </article>
      </div>
    </section>
  </div>
);

export default Index;
