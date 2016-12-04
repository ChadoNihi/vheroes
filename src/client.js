import React from 'react';
import { render } from 'react-dom';
import { browserHistory, match, Router } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import { configureStore } from './store/configureStore';
//require('./main.styl');

const store = configureStore(browserHistory, window.__PRELOADED_STATE__);
//const history = syncHistoryWithStore(browserHistory, store);

document.addEventListener('DOMContentLoaded', ()=> {
  render((
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    ), document.getElementById('root'));
}, false);
