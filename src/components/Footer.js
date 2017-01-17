import React from 'react';
import {Link} from 'react-router';

export default ()=>
  <footer className="mdl-mini-footer" style={({marginTop: "2em", padding: "0.5em 1em"})}>
    <div className="mdl-mini-footer--left-section">
      <ul className="mdl-mini-footer--link-list">
        <li>Created by eFish (aka <a href='https://twitter.com/ChadoNihi' target='_blank'>Chado Nihi</a>)</li>
      </ul>
    </div>
    <div className="mdl-mini-footer--right-section">
      <ul className="mdl-mini-footer--link-list">
        <li><a target='_blank' href="https://github.com/ChadoNihi/vheroes/blob/master/CONTRIBUTING.md">Contributing</a></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </footer>;
