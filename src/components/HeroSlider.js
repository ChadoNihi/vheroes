import React from 'react';
import Slider from 'react-slick';

export default ({heroes, params})=> {
  const settings = {
    dots: false,
    infinite: true,
    initialSlide: params.heroId || 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {heroes.map( (hero)=> {
        return <HeroSlide key={hero.id} {...hero} />;
      })}
    </Slider>
  );
};
