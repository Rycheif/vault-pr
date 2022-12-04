import React from 'react';
import {LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import {getMovie} from "../movies";
import "../style/movie.css"
import TextBoxWithIcon from "../component/TextBoxWithIcon";
import Poster from "../component/Poster";

export const loader = ({params}: LoaderFunctionArgs) => {
  return getMovie(params.movieId);
};

const Movie: React.FC = () => {
  const movie: any = useLoaderData();

  return (
    <div className="d-flex flex-column align-items-center my-5">
      <Poster title={movie.title} image={movie.image}/>
      <TextBoxWithIcon text={movie.content} iconName="fe:comment" title="Description"/>
    </div>
  );
};

export default Movie;
