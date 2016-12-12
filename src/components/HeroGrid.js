import React from 'react';
import HeroCell from './HeroCell';

export default ({heroes})=> {
  return (
    <div className="mdl-grid">
      {heroes.map(hero=>{
        return (
          <div key={hero.id} className="mdl-cell mdl-cell--4-col mdl-cell--3-col-phone">
            <HeroCell heroId={hero.id} heroName={hero.name} imgSrc={hero.imgSrcs.thumb} />
          </div>
        );
      })}
    </div>
  );
};
