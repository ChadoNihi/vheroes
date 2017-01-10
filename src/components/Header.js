import React from 'react';
import { Link } from 'react-router';

import {reverseSortSuffix} from '../constants';

const rePathForWhenToShowSort = /^/(#.*)?$/;

export default ({isDragLocked, onDragLockChange, onSortChange, sortBy, title, location})=>
  <header className="mdl-layout__header mdl-layout__header--scroll mdl-layout__header--transparent">
    <div className="mdl-layout-icon"></div>
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title"><Link to="/" className='logo-text'>{title}</Link><span className='mark-sign'>*</span></span>

      <div className="mdl-layout-spacer"></div>

      {rePathForWhenToShowSort.test(location.pathname) ? (<nav className='mdl-navigation nav-sort'>
        {/*<span>Sort</span>*/}
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="sort-opt-id">
          <input type="radio" id="sort-opt-id" className="mdl-radio__button" name="sort-options" value="id"
              onChange={onSortChange} checked={sortBy === 'id'} />
          <span className="mdl-radio__label">Newest first</span>
        </label>
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor={`sort-opt-id${reverseSortSuffix}`}>
          <input type="radio" id={`sort-opt-id${reverseSortSuffix}`} className="mdl-radio__button" name="sort-options" value={`id${reverseSortSuffix}`}
              onChange={onSortChange} checked={sortBy === `id${reverseSortSuffix}`} />
          <span className="mdl-radio__label">Oldest published</span>
        </label>
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="sort-opt-name">
          <input type="radio" id="sort-opt-name" className="mdl-radio__button" name="sort-options" value="name"
              onChange={onSortChange} checked={sortBy === 'name'} />
          <span className="mdl-radio__label">A-Z</span>
        </label>
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor={`sort-opt-name${reverseSortSuffix}`}>
          <input type="radio" id={`sort-opt-name${reverseSortSuffix}`} className="mdl-radio__button" name="sort-options" value={`name${reverseSortSuffix}`}
              onChange={onSortChange} checked={sortBy === `name${reverseSortSuffix}`} />
          <span className="mdl-radio__label">Z-A</span>
        </label>
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="sort-opt-rand">
          <input type="radio" id="sort-opt-rand" className="mdl-radio__button" name="sort-options" value="rand"
              onChange={onSortChange} checked={sortBy === 'rand'} />
          <span className="mdl-radio__label">Shuffle</span>
        </label>
      </nav>) : null}

      {location.pathname.startsWith('/hero/') ?
        <div className='mdl-navigation'>
          <button className="lock-toggle btn-wo-style" onClick={onDragLockChange}>
            <i className={"fa fa-lock fa-lg"+(isDragLocked ? " active" : "")} aria-hidden="false"></i>
            <span>
              {isDragLocked ? "Unlock " : "Lock "} dragging
            </span>
          </button>
        </div>
      : null}

    </div>
  </header>;
