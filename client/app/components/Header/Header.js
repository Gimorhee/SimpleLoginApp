import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header className="navbar">
    <Link className="nav-link" to="/"><span className="app-name">SimpleLoginApp</span></Link>
  </header>
);

export default Header;
