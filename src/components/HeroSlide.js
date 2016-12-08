import React from 'react';

export default ({imgSrc, name, shortIntro, what, see})=> {
  return (
    <div className='hero-block'>
      <img className='hero-img' src={imgSrc} alt={`most probably a photo of ${name}`} />
      <h1 className='hero-name' dangerouslySetInnerHTML={{__html: name}}></h1>
      <h6 className='save-spaces' dangerouslySetInnerHTML={{__html: shortIntro}}></h6>
      <p className='save-spaces' dangerouslySetInnerHTML={{__html: what}}></p>

      <h4>Explore:</h4>
      <ul className="mdl-list">
        {see.map((opt, i)=> {
          return (
            <li className="mdl-list__item explore-list__item" key={i}>
              <span className="mdl-list__item-primary-content save-spaces" dangerouslySetInnerHTML={{__html: opt}}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
