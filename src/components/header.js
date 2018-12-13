import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <React.Fragment>
    <h1>
      <Link to="/">Today I Learned</Link>
    </h1>
    <small className="subtitle">Inspired by <a href="https://til.hashrocket.com/" target="_blank" rel="noopener noreferrer">til.hashrocket.com</a></small>
  </React.Fragment>
);

export default Header;
