import React, {useContext} from 'react';

import "../style/Poster.css"
import {Icon} from "@iconify/react";
import axios from "axios";
import {BASE_URL, MOVIE} from "../urls";
import {useNavigate} from "react-router-dom";
import UserContext from "../context/UserContext";

interface PosterProps {
  id: string,
  title: string,
  image: string,
}

const Poster: React.FC<PosterProps> = ({id, title, image}) => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const handleDelete = async () => {
    try {
      await axios.delete<{ deletedCount: number }>(`${BASE_URL}${MOVIE}/${id}`);
      navigate("/movies");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error message: ', error.message);
      } else {
        console.error('Error', error);
      }
    }
  }

  return (
    <article className="d-flex flex-column align-items-center my-3">
      <figure className="poster">
        {context.user?.isAdmin
          ? <div className="icon-container" onClick={handleDelete}>
            <Icon icon="fe:trash" className="delete-icon"/>
          </div>
          : null
        }
        <img className="poster-image" src={image} alt={title} width="250" height="350"/>
        <figcaption className="text-center pt-2">{title}</figcaption>
      </figure>
      <div className="title mt-3">
        <span className="mb-3 fw-bold">{title}</span>
      </div>
    </article>
  );
};

export default Poster;
