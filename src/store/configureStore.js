import {createStore, compose, applyMiddleware} from 'redux';
//import thunkMiddleware from 'redux-thunk';
import reducer from '../reducer';

export default function configureStore(history, initialState) {
  return createStore(
    reducer,
    (Object.prototype.toString.call(initialState) === "[object String]" ?
      JSON.parse(initialState) : initialState),
    applyMiddleware(logger)
  );
}
