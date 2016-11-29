import React from 'react';
import { render } from 'react-dom';
import { browserHistory, match, Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import { configureStore } from './store';
//require('./main.styl');

const store = configureStore(browserHistory, window.__initialState__);
const history = syncHistoryWithStore(browserHistory, store);

document.addEventListener('DOMContentLoaded', ()=> {
  render((
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    ), document.getElementById('root'));
}, false);
