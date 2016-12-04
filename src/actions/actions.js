import * as actions from './actionTypes.js';

export const changeHero = (id)=>
  ({type: actions.CHANGE_HERO_IN_FOCUS, id});
export const setHeroes = (heroes)=>
  ({type: actions.SET_HEROES, heroes});
export const setSortBy = (sortBy)=>
  ({type: actions.SET_SORTBY, sortBy});
