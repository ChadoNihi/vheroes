import React from 'react';
import { Link } from 'react-router';

import {reverseSortingSuffix} from '../constants';

export default ({onSortChange, sortBy, subtitle, title})=>
  <header className="mdl-layout__header mdl-layout__header--scroll mdl-layout__header--transparent">
    <div className="mdl-layout-icon"></div>
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title"><Link to="/">{title}</Link></span>
      <span>{subtitle}</span>
      <div className="mdl-layout-spacer"></div>

      <nav className='mdl-navigation nav-sort'>
        <span>Sort</span>
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="sort-opt-id">
          <input type="radio" id="sort-opt-id" className="mdl-radio__button" name="sort-options" value="id"
              onChange={onSortChange} checked={sortBy === 'id'} />
          <span className="mdl-radio__label">Newest first</span>
        </label>
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor={`sort-opt-id${reverseSortingSuffix}`}>
          <input type="radio" id={`sort-opt-id${reverseSortingSuffix}`} className="mdl-radio__button" name="sort-options" value={`id${reverseSortingSuffix}`}
              onChange={onSortChange} checked={sortBy === `id${reverseSortingSuffix}`} />
          <span className="mdl-radio__label">Oldest published</span>
        </label>
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="sort-opt-name">
          <input type="radio" id="sort-opt-name" className="mdl-radio__button" name="sort-options" value="name"
              onChange={onSortChange} checked={sortBy === 'name'} />
          <span className="mdl-radio__label">A-Z</span>
        </label>
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor={`sort-opt-name${reverseSortingSuffix}`}>
          <input type="radio" id={`sort-opt-name${reverseSortingSuffix}`} className="mdl-radio__button" name="sort-options" value={`name${reverseSortingSuffix}`}
              onChange={onSortChange} checked={sortBy === `name${reverseSortingSuffix}`} />
          <span className="mdl-radio__label">Z-A</span>
        </label>
      </nav>

    </div>
  </header>;
