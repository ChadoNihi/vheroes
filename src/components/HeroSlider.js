import React from 'react';
import Slider from 'react-slick';
import HeroSlide from './HeroSlide'

export default ({heroes, isDragLocked, onDragLockChange, params})=> {
  const settings = {
    dots: false,
    draggable: false,
    infinite: true,
    initialSlide: params.heroId || 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false
  };
  return (
    <div>
      <label className="lock-toggle mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" htmlFor="drag-lock">
        <input type="checkbox" id="drag-lock" className="mdl-icon-toggle__input" checked={isDragLocked} onChange={onDragLockChange} />
        <i className="mdl-icon-toggle__label fa fa-lock" aria-hidden="false"></i>
      </label>
      <Slider {...settings}>
        {heroes.map( (hero)=> {
          return <div key={hero.id}><HeroSlide {...hero} /></div>;
        })}
      </Slider>
    </div>
  );
};
