import { Link } from 'react-router';

import React from 'react';
import HeroSlide from './HeroSlide'

export default ({heroes})=> {
  return (
    <div className="mdl-grid">
      {heroes.map(hero=>{
        return (
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-phone">
            <Link to={`/hero/${hero.id}`}>
              <img className='hero-thumb' src={hero.imgSrcs.thumb} alt={`most probably a photo of ${hero.name}`} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
