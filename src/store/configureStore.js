import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducer';

export default function configureStore(history, initialState) {
  return createStore(
    reducer,
    initialState
    //applyMiddleware(thunkMiddleware)
  );
}
