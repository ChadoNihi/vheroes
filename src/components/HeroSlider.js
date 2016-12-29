import React from 'react';
import Slider from 'react-slick';
import HeroSlide from './HeroSlide'

export default ({heroes, isDragLocked, params})=> {
  const settings = {
    dots: false,
    draggable: !isDragLocked,
    infinite: true,
    initialSlide: params.heroId || 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true
  };
  return (
    <div>
      <Slider {...settings}>
        {heroes.map( (hero)=> {
          return <div key={hero.id}><HeroSlide {...hero} /></div>;
        })}
      </Slider>
    </div>
  );
};
