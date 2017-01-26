import React from 'react';
import {baseUrl} from '../constants';

export default ({location, randomHeroId})=> {
  return (
    <div className="mdl-card hero-card mdl-shadow--16dp">
      <div className="mdl-card__title general-card-header">
        <h2 style={{'fontSize':'160%', 'marginBottom':'0'}}>Nothing was found for the path <i>{location.location.pathname}</i>.</h2>
      </div>
      <div className="mdl-card__actions">
        {/*<h4 className='hero-explore-title'>Try instead:</h4>*/}
        <a className="mdl-button mdl-js-button mdl-js-ripple-effect" href={baseUrl}>
          Go to Main page
        </a>
        <a className="mdl-button mdl-js-button mdl-js-ripple-effect" href={baseUrl+'/hero/'+randomHeroId}>
          Show a random hero!
        </a>
      </div>
    </div>
  );
}
