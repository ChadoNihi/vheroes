import React from 'react';
import { Link } from 'react-router';

export default ({title})=>
  <div className="mdl-layout__drawer">
    <Link className="mdl-layout-title logo-text">{title}</Link>
    <nav className="mdl-navigation">
      <Link to="/about" className="mdl-navigation__link">About</Link>
    </nav>
    <p className='sidenote'>* those I'm aware of</p>
  </div>;
