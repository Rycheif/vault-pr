import React, {useState} from 'react';
import {Link, LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import {getMovies, Movie} from "../movies";

import "../style/movies.css";
import ReactPaginate from "react-paginate";

export const loader = ({params}: LoaderFunctionArgs) => {
  return getMovies(params.id);
};

const MovieList: React.FC<{ itemsPerPage: number }> = ({itemsPerPage}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const movies: any = useLoaderData();

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = movies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movies.length / itemsPerPage);

  const handleClick = (selectedItem: number) => {
    const newOffset = (selectedItem * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  }

  return (
    <>
      <div className="list-container d-flex justify-content-evenly gap-5 flex-wrap">
        {
          currentItems.map((movie: Movie) => <ListItem
            key={movie.id}
            id={movie.id}
            image={movie.image}
            title={movie.title}
          />)
        }
      </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={selectedItem => handleClick(selectedItem.selected)}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          containerClassName={"pagination"}
          previousLinkClassName={"pagination-link"}
          nextLinkClassName={"pagination-link"}
          disabledClassName={"pagination-link-disabled"}
          activeClassName={"pagination-link-active"}
          renderOnZeroPageCount={undefined}
        />
    </>
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
