import React from 'react';

export default ({imgSrc, name, shortIntro, what, see})=> {
  return (
    <div className='hero-block'>
      <img className='hero-img' src={imgSrc} alt={`most probably a photo of ${name}`} />
      <h1 className='hero-name'>{name}</h1>
      <h6>{shortIntro}</h6>
      <p>{what}</p>
    </div>
  );
};
