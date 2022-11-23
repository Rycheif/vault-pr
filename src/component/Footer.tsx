import React from 'react';

import "../style/Footer.css"

const Footer: React.FC = () => (
  <footer className="footer">
      <p>Copyright © {new Date().getFullYear()} Design: Michał Baka</p>
  </footer>
);

export default Footer;
