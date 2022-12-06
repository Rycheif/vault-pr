import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import Index from "./routes";
import MovieList, {loader as movieListLoader} from "./routes/movies";
import Movie, {loader as movieLoader} from "./routes/movie";
import NotFound from "./routes/notFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [{
      errorElement: <NotFound/>,
      children: [
        {
          index: true,
          element: <Index/>
        },
        {
          path: 'movies',
          element: <MovieList itemsPerPage={3}/>,
          loader: movieListLoader
        },
        {
          path: 'movies/:movieId',
          element: <Movie/>,
          loader: movieLoader
        }
      ]
    }]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
