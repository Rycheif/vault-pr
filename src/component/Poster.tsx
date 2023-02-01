import React from 'react';

import "../style/Poster.css"

interface PosterProps {
  title: string,
  image: string,
}

const Poster: React.FC<PosterProps> = ({title, image}) => (
  <article className="d-flex flex-column align-items-center my-3">
    <figure className="poster">
      <img className="poster-image" src={image} alt={title} width="250" height="350"/>
      <figcaption className="text-center pt-2">{title}</figcaption>
    </figure>
    <div className="title mt-3">
      <span className="mb-3 fw-bold">{title}</span>
    </div>
  </article>
);

export default Poster;
