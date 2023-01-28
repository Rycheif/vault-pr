import React, {useState} from 'react';
import {Link, LoaderFunctionArgs, useLoaderData} from "react-router-dom";

import "../style/movies.css";
import ReactPaginate from "react-paginate";
import Poster from "../component/Poster";
import axios from "axios";
import {BASE_URL} from "../urls";
import {Movie} from "../types";

export const loader = async ({params}: LoaderFunctionArgs) => {
  try {
    const {data} = await axios.get<Movie[]>(`${BASE_URL}/movies`);

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error message: ', error.message);
      throw new Response(`Error message: ${error.message}`)
    } else {
      console.error('Unexpected error: ', error);
      throw new Response(`Error message: ${error}`)
    }
  }
};

const MovieList: React.FC<{ itemsPerPage: number }> = ({itemsPerPage}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const movies = useLoaderData() as Movie[];

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = movies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movies.length / itemsPerPage);

  const handleClick = (selectedItem: number) => {
    const newOffset = (selectedItem * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="list-container d-flex justify-content-center gap-5 flex-wrap">
        {
          currentItems.map((movie: Movie) =>
            <div key={movie.id}>
              <Link to={`details/${movie.id}`} className="link">
                <Poster title={movie.title} image={movie.image}/>
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
