import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';

//import routes from './routes';
import App from './components/App';
import configureStore from './store/configureStore';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// require("slick-carousel");
// require("!slick-carousel/slick/slick.css");
// require("!slick-carousel/slick/slick-theme.css");
require('./styles/main.styl');

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
