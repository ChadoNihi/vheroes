import React from 'react';
import HeroCell from './HeroCell';
import MasonryLayout from 'react-masonry-layout';

const sizes = [
  { columns: 1, gutter: 10 },
  { mq: '700px', columns: 2, gutter: 26 },
  { mq: '1104px', columns: 3, gutter: 24 }
];

const HeroGrid = ({heroes})=> {
  return (
    <MasonryLayout id='hero-grid' infiniteScrollDisabled={true} sizes={sizes}>
      {heroes.map((hero, i)=>{
        return <HeroCell key={i} heroId={hero.id} heroName={hero.name} imgSrc={hero.imgSrcs.thumb} />;
      })}
    </MasonryLayout>
  );
};

HeroGrid.defaultProps = {
  maxCount: 5,
  perPage: 10
};

export default HeroGrid;
