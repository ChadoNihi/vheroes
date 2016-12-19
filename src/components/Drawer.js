import React from 'react';
import { Link } from 'react-router';

export default ({navHTML})=>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Title</span>
    <nav className="mdl-navigation">
      <Link to="/about" className="mdl-navigation__link">About</Link>
    </nav>
  </div>;
