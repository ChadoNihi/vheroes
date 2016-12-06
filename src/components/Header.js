import React from 'react';
import { Link } from 'react-router';

export default ({title, subtitle})=>
  <div>
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title"><Link to="/">{title}</Link></span>
        <span>{subtitle}</span>
        <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link to="/about" className="mdl-navigation__link">About</Link>
          </nav>
      </div>
    </header>
    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
      <span className="mdl-layout-title">Title</span>
      <nav className="mdl-navigation">
        <Link to="/about" className="mdl-navigation__link">About</Link>
      </nav>
    </div>
  </div>;
