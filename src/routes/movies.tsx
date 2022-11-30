import React from 'react';
import {Link, LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import {getMovies, Movie} from "../movies";

import "../style/movies.css";

export const loader = ({params}: LoaderFunctionArgs) => {
  return getMovies(params.id);
};

const MovieList: React.FC = () => {
  const movies: any = useLoaderData();

  return (
    <div className="list-container d-flex justify-content-evenly gap-5 flex-wrap">
      {
        movies.map((movie: Movie) => <ListItem
          key={movie.id}
          id={movie.id}
          image={movie.image}
          title={movie.title}
        />)
      }
    </div>
  );
};

const ListItem: React.FC<Movie> = ({id, title, image}) => (
  <Link to={id} className="text-decoration-none">
    <article className="movie-card">
      <figure>
        <img src={image} alt={title} width="250" height="250"/>
        <figcaption className="text-center pt-2">{title}</figcaption>
      </figure>
    </article>
  </Link>
);

export default MovieList;
