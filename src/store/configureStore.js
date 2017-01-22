import {createStore, compose, applyMiddleware} from 'redux';
(process.env.NODE_ENV === 'dev' && import createLogger from 'redux-logger');
//import thunkMiddleware from 'redux-thunk';
import reducer from '../reducer';

export default function configureStore(history, initialState) {
  return createStore(
    reducer,
    (Object.prototype.toString.call(initialState) === "[object String]" ?
      JSON.parse(initialState) : initialState),
    (createLogger && applyMiddleware( createLogger() )
  );
}
