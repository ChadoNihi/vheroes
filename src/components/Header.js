import React from 'react';
import { Link } from 'react-router';

const navHTML = ( <nav className="mdl-navigation">
                    <Link to="/about" className="mdl-navigation__link">About</Link>
                  </nav> );

export default ({onSortClick, sortBy, subtitle, title})=>
  <div>
    <header className="mdl-layout__header mdl-layout__header--scroll mdl-layout__header--transparent">
      <div className="mdl-layout-icon"></div>
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title"><Link to="/">{title}</Link></span>
        <span>{subtitle}</span>
        <div className="mdl-layout-spacer"></div>
        <nav className='mdl-navigation nav-sort'>
          <span>Sort by</span>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="sort-opt-id">
            <input type="radio" id="sort-opt-id" className="mdl-radio__button" name="sort-options" value="id"
                onClick={onSortClick} checked={sortBy === 'id'} />
            <span className="mdl-radio__label">First</span>
          </label>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="sort-opt-az">
            <input type="radio" id="sort-opt-az" className="mdl-radio__button" name="sort-options" value="az"
                onClick={onSortClick} checked={sortBy === 'az'} />
            <span className="mdl-radio__label">Second</span>
          </label>
        </nav>
      </div>
    </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Title</span>
      {navHTML}
    </div>
  </div>;
