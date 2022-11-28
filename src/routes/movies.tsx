import React from 'react';
import {LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import {getMovies, Movie} from "../movies";

import "../style/movies.css";

export const loader = ({params}: LoaderFunctionArgs) => {
  return getMovies(params.id);
};

const MovieList: React.FC = () => {
  const movies: any = useLoaderData();

  return (
    <div className="list-container d-grid">
      {
        movies.map((movie: Movie) => <ListItem
          key={movie.id}
          id={movie.id}
          image={movie.image}
          title={movie.title}
          content={movie.content}
        />)
      }
    </div>
  );
};

const ListItem: React.FC<Movie> = ({title, image}) => (
  <article className="movie-card">
    <figure>
      <img src={image} alt={title} width="250" height="250"/>
      <figcaption className="text-center pt-2">{title}</figcaption>
    </figure>
  </article>
);

export default MovieList;
