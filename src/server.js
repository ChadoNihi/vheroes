import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './routes';

const app = express(),
      port = process.env.PORT || 8080;

const renderFullPage = (html, preloadedState)=>
  `
  <!doctype html>
  <html>
    <head>
      <title>Redux Universal Example</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `

app.get('/*', function (req, res) {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      // JSON.stringify
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      );
      res.send(renderFullPage(html, store.getState()));

    } else {
      res.status(404).send('Not Found');
    }
  });
});

app.listen(port, function () {
  console.log(`The app's listening on port ${port}!`);
});
