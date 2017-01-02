import React from 'react';

export default ()=> {
  return (
    <div className="mdl-card hero-card mdl-shadow--16dp">
      <div className="mdl-card__title hero-card-title">
        <h1 className='hero-name'>Expand your think space</h1>
        <h6 className='hero-name'>Consider others</h6>
      </div>
      <div className="hero-what mdl-card__supporting-text">
        Irrespective of what you thinks about this website, you should definetely familiarize oneself with the work of exceptional persons presented here.
      </div>
      <div className="hero-what mdl-card__supporting-text">
        Whom to expect to find here? A diverse set of philosophers, scientists, activists, writers, artists, and others with all sorts of professional backgrounds. Often with quite different means, all are working against shared universal disvalue - suffering.
      </div>
      <div className="hero-what mdl-card__supporting-text">
        You don't need to be a vegan to enjoy the content (a funny thing BTW, one doesn't need to be a vegan <em>personally</em> to end up in the list.)
      </div>
      <div className="mdl-card__actions">
        <a className="mdl-button mdl-js-button mdl-js-ripple-effect" href='#'>
          Contact
        </a>
      </div>
    </div>
  );
}
