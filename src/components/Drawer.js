import React from 'react';
import { Link } from 'react-router';

export default ({title})=>
  <div className="mdl-layout__drawer">
    <Link to='/' className="mdl-layout-title logo-text">{title}</Link>
    <nav className="mdl-navigation">
      <Link to="/about" className="mdl-navigation__link">About</Link>
    </nav>
    <p className='sidenote'>* not a final name. Shameless variant on <a href='https://www.facebook.com/groups/considerales/' target='_blank'>Considerales</a></p>
  </div>;
