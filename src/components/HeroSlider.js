import React from 'react';
import Slider from 'react-slick';
import HeroSlide from './HeroSlide';
import SharePanel from './SharePanel';
import {siteName} from '../constants';

export default ({afterHeroChange, heroes, heroId, isDragLocked, location})=> {
  const settings = {
    afterChange: afterHeroChange,
    dots: false,
    draggable: !isDragLocked,
    infinite: true,
    initialSlide: heroId,
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
      <SharePanel description={siteName+' is a website featuring bright people whose primary cause contributes to reducing suffering in the world.'} media={'test'} pathname={location.pathname} title={'Meet '+heroes[heroId].name+' | '+siteName} />
    </div>
  );
};
