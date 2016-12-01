import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducer';

export default function configureStore(initialState) {
  return createStore(
    reducer,
    //applyMiddleware(thunkMiddleware)
  );
}
