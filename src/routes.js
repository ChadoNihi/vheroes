import React  from 'react';
import {Route} from 'react-router';

import App from './components/App.js';
import HeroSlider from './components/HeroSlider.js';
import HeroSlide from './components/HeroSlide.js';
import About from './components/About.js';

export default (
  <Route path="/" component={App}>
    <Route path='hero(/:heroId)' component={HeroSlider} />
    //<Route path="hero(/:heroId)" component={HeroSlide} />
    <Route path="/about" component={About}></Route>
  </Route>
);
