import React from 'react';

export default ({imgSrc, name, shortIntro, what, see})=> {
  return (
    <div className='hero-block'>
      <img className='hero-img' src={imgSrc} alt={`most probably a photo of ${name}`} />
      <h1 className='hero-name' dangerouslySetInnerHTML={{__html: name}}></h1>
      <h6 dangerouslySetInnerHTML={{__html: shortIntro}}></h6>
      <p dangerouslySetInnerHTML={{__html: what}}></p>
      
      <ul className="mdl-list">
        {see.map((opt, i)=> {
          return (
            <li className="mdl-list__item" key={i}>
              <span className="mdl-list__item-primary-content" dangerouslySetInnerHTML={{__html: opt}}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
