import { Link } from 'react-router';

import React from 'react';

export default ({heroId, heroName, imgSrc})=> {
  return (
    <Link to={`/hero/${heroId}`} className='hero-cell-link'>
      <h2 className="hero-cell-title">{heroName}</h2>
      <img className='hero-thumb' src={imgSrc} alt={`most probably a photo of ${heroName}`} />
    </Link>
  );
};
