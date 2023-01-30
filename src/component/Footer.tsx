import React from 'react';

import "../style/Footer.css"
import Container from "react-bootstrap/Container";

const Footer: React.FC = () => (
  <Container>
    <footer className="footer">
      <p>Copyright © {new Date().getFullYear()} Design: Michał Baka</p>
    </footer>
  </Container>
);

export default Footer;
