import React from 'react';

export default ({imgSrc, name, shortIntro, what, see})=> {
  console.log('HeroSlide props: '+props);
  return (
    <div className='hero-block'>
      <img src={imgSrc} alt={`most probably a photo of ${name}`} />
      <h2>{name}</h2>
      <p>{shortIntro}</p>
      <p>{what}</p>
    </div>
  );
};
