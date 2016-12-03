import { combineReducers } from "redux";
//import { routerReducer } from "react-router-redux";

import * as a from "./actions/actionTypes.js";

const initialState = {
  heroInFocus: 0,
  sortBy: 'id',
  heroes
};

const rootReducer = (state = initialState, action = {})=> {
  switch (action.type) {
    case a.CHANGE_HERO_IN_FOCUS:
      return Object.assign({}, state, {heroInFocus: action.id});
    default:
      return state;
};

export default combineReducers({
  rootReducer
});
