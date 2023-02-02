import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import Index from "./routes";
import MovieList, {loader as movieListLoader} from "./routes/movies";
import MovieDetails, {loader as movieLoader} from "./routes/movieDetails";
import ErrorPage from "./routes/error-page";
import Login, {action as loginAction} from "./routes/login";
import Register, {action as registerAction} from "./routes/register";
import {UserProvider} from "./context/UserContext";
import Logout, {action as logoutAction} from "./routes/logout";
import ProtectedRoute from "./component/ProtectedRoute";
import Add, {action as addAction} from "./routes/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [{
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Index/>
        },
        {
          path: 'signin',
          element: <Login/>,
          action: loginAction,
        },
        {
          path: 'signup',
          element: <Register/>,
          action: registerAction,
        },
        {
          element: <ProtectedRoute/>,
          children: [
            {
              path: 'logout',
              element: <Logout/>,
              action: logoutAction,
            },
            {
              path: 'add',
              element: <Add/>,
              action: addAction,
            },
          ],
        },
        {
          path: 'movies',
          element: <MovieList itemsPerPage={12}/>,
          loader: movieListLoader
        },
        {
          path: 'movies/details/:movieId',
          element: <MovieDetails/>,
          loader: movieLoader
        }
      ]
    }]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </UserProvider>
)
