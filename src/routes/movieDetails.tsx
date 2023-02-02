import React from 'react';
import {LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import TextBoxWithIcon from "../component/TextBoxWithIcon";
import Poster from "../component/Poster";
import axios from "axios";
import {BASE_URL} from "../urls";
import {Movie} from "../types";

export const loader = async ({params}: LoaderFunctionArgs) => {
  try {
    const {data} = await axios.get<Movie>(`${BASE_URL}/movies/${params.movieId}`);

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error message: ', error.message);
      throw new Response(`Error message: ${error.message}`, {status: error.response?.status});
    } else {
      console.error('Unexpected error: ', error);
      throw new Response(`Unexpected message: ${error}`);
    }
  }
};

const MovieDetails: React.FC = () => {
  const movie = useLoaderData() as Movie;

  return (
    <div className="d-flex flex-column align-items-center my-5">
      <Poster id={movie.id} title={movie.title} image={movie.image}/>
      <TextBoxWithIcon text={movie.content} iconName="fe:comment" title="Description" style={{marginTop: "1rem"}}/>
    </div>
  );
};

export default MovieDetails;
