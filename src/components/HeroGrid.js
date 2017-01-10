import React from 'react';
import HeroCell from './HeroCell';
import MasonryLayout from 'react-masonry-layout';

const sizes = [
  { columns: 1, gutter: 10 },
  { mq: '600', columns: 3, gutter: 20 },
  { mq: '1024px', columns: 4, gutter: 30 }
];

const HeroGrid = ({heroes})=> {
  return (
    <MasonryLayout id='hero-grid' infiniteScrollDisabled={true} sizes={sizes}>
      {heroes.map(hero=>{
        return <HeroCell heroId={hero.id} heroName={hero.name} imgSrc={hero.imgSrcs.thumb} />;
      })}
    </MasonryLayout>
  );
};

HeroGrid.defaultProps = {
  maxCount: 5,
  perPage: 10
};

export default HeroGrid;
