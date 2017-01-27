import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/configureStore';
// import 'slick-carousel';
// import 'slick/slick.css';
// import 'slick/slick-theme.css';
// require("slick-carousel");
// require("!slick-carousel/slick/slick.css");
// require("!slick-carousel/slick/slick-theme.css");
require('./styles/main.styl');

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#Polyfill
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      var len = o.length >>> 0;

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      var thisArg = arguments[1];

      var k = 0;

      while (k < len) {
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        k++;
      }
      return -1;
    }
  });
}

const store = configureStore(undefined, window.__PRELOADED_STATE__);
//const history = syncHistoryWithStore(browserHistory, store);

document.addEventListener('DOMContentLoaded', ({router, location})=> {
  render((
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));

  /*render((
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    ), document.getElementById('root'));*/
}, false);
