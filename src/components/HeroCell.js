import { Link } from 'react-router';

import React from 'react';

export default ({heroId, heroName, imgSrc})=> {
  return (
    <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-phone">
      <Link to={`/hero/${heroId}`}>
        <h2 className="hero-cell-title">{heroName}</h2>
        <img className='hero-thumb' src={imgSrc} alt={`most probably a photo of ${heroName}`} />
      </Link>
    </div>
  );
};
