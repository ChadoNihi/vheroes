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
        <nav className='mdl-navigation nav-sort'>
          <span>Sort by</span>
          <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="sort-opt-def">
            <input type="radio" id="sort-opt-def" class="mdl-radio__button" name="sort-options" value="1" checked />
            <span class="mdl-radio__label">First</span>
          </label>
          <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
            <input type="radio" id="option-2" class="mdl-radio__button" name="sort-options" value="2" />
            <span class="mdl-radio__label">Second</span>
          </label>
        </nav>
      </div>
    </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Title</span>
      {navHTML}
    </div>
  </div>;
