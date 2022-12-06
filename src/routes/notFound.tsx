import React from "react";

import "../style/notFound.css"
import {Link} from "react-router-dom";

const NotFound: React.FC = () => (
  <div className="d-flex flex-column align-items-center justify-content-center not-found-element">
    <h1 className="headline">404</h1>
    <p className="error-message">Page not found</p>
    <Link to="/" className="link">Home</Link>
  </div>
);

export default NotFound;
