import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import '../styles/global.css';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
