import React from 'react';

interface PosterProps {
  title: string,
  image: string,
}

const Poster: React.FC<PosterProps> = ({title, image}) => (
  <article className="d-flex flex-column align-items-center">
    <h1 className="mb-3">{title}</h1>
    <figure className="poster">
      <img src={image} alt={title} width="250" height="350"/>
      <figcaption className="text-center pt-2" style={{position: "absolute", left: "-10000px"}}>{title}</figcaption>
    </figure>
  </article>
);

export default Poster;
