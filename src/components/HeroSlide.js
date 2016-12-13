import React from 'react';

export default ({imgSrcs, name, shortIntro, what, quotes, see})=> {
  return (
    <div className='hero-block'>
      <img className='hero-img' src={imgSrcs.default} alt={`most probably a photo of ${name}`} />
      <h1 className='hero-name' dangerouslySetInnerHTML={{__html: name}}></h1>
      <h6 className='hero-intro save-spaces' dangerouslySetInnerHTML={{__html: shortIntro}}></h6>
      <p className='hero-what save-spaces' dangerouslySetInnerHTML={{__html: what}}></p>
      {quotes.length && quotes.map((quote, i)=> {
        return <div className='hero-quote' key={i}>{quote}</div>;
      })}

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
