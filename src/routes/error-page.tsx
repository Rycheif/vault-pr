import React from "react";

import "../style/notFound.css"
import {Link, useRouteError} from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center not-found-element">
      <h1 className="headline">Something's wrong, I can feel it</h1>
      <p className="error-message">{error.statusText || error.message}</p>
      <Link to="/" className="link">Home</Link>
    </div>
  );
};

export default ErrorPage;
