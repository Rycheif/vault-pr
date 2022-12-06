import React, {useState} from 'react';
import {Link, LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import {getMovies, Movie} from "../movies";

import "../style/movies.css";
import ReactPaginate from "react-paginate";
import Poster from "../component/Poster";

export const loader = ({params}: LoaderFunctionArgs) => {
  return getMovies();
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
  };

  return (
    <>
      <div className="list-container d-flex justify-content-evenly gap-5 flex-wrap">
        {
          currentItems.map((movie: Movie) =>
            <div key={movie.id}>
              <Link to={movie.id} className="link">
                <Poster title={movie.title} image={movie.image} />
              </Link>
            </div>)
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

export default MovieList;
