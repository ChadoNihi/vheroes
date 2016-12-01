import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import {} from "./actions/actionTypes.js";

const initialState = {
  heroInFocus: 0,
  sortBy: 'id',
  heroes
};

const rootReducer = (state = initialState, action = {})=> {
  switch (action.type) {
    default:
      return state;
};

export default combineReducers({
  rootReducer,
  routing: routerReducer
});
