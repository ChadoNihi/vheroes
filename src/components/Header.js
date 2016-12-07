import React from 'react';
import { Link } from 'react-router';

const navHTML = ( <nav className="mdl-navigation">
                    <Link to="/about" className="mdl-navigation__link">About</Link>
                  </nav> );

export default ({title, subtitle})=>
  <div>
    <header className="mdl-layout__header mdl-layout__header--scroll mdl-layout__header--transparent">
      <div className="mdl-layout-icon"></div>
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title"><Link to="/">{title}</Link></span>
        <span>{subtitle}</span>
        <div className="mdl-layout-spacer"></div>
          {navHTML}
      </div>
    </header>
    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
      <span className="mdl-layout-title">Title</span>
      {navHTML}
    </div>
  </div>;
