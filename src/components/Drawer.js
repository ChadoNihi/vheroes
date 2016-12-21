import React from 'react';
import { Link } from 'react-router';

export default ({title})=>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title logo-text">{title}</span>
    <nav className="mdl-navigation">
      <Link to="/about" className="mdl-navigation__link">About</Link>
    </nav>
    <p className='sidenote'>* those I'm aware of</p>
  </div>;
