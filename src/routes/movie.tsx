import React from 'react';
import {LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import "../style/movie.css"
import TextBoxWithIcon from "../component/TextBoxWithIcon";
import Poster from "../component/Poster";
import axios from "axios";
import {BASE_URL} from "../rest-config";

export const loader = async ({params}: LoaderFunctionArgs) => {
  try {
    const {data} = await axios.get<MovieType>(`${BASE_URL}/movies/${params.movieId}`);

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error message: ', error.message);
      throw new Response(`Error message: ${error.message}`)
    } else {
      console.error('Unexpected error: ', error);
      throw new Response(`Unexpected message: ${error}`)
    }
  }
};

export interface MovieType {
  id: string
  title: string,
  image: string,
  content: string,
}

const Movie: React.FC = () => {
  const movie = useLoaderData() as MovieType;

  return (
    <div className="d-flex flex-column align-items-center my-5">
      <Poster title={movie.title} image={movie.image}/>
      <TextBoxWithIcon text={movie.content} iconName="fe:comment" title="Description" style={{marginTop: "1rem"}}/>
    </div>
  );
};

export default Movie;
