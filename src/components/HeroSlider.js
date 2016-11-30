var React = require('react');
var Slider = require('react-slick');

export default HeroSlider = ({heroes})=> {
  const settings = {
    dots: false,
    infinite: true,
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
