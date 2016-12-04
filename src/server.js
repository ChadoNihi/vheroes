import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import fs from 'fs';
import path from 'path';

import routes from './routes';
import configureStore from './store/configureStore';
import {changeHero, setHeroes, setSortBy} from './actions/actions';

const app = express(),
      port = process.env.PORT || 8080;

const renderFullPage = (html, preloadedState)=>
  `
  <!doctype html>
  <html>
    <head lang='en'>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Voting App for Free Code Camp" />
      <title>Vegan Heroes</title>
      <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.blue_grey-orange.min.css" />
      <link rel="stylesheet" href="public/css/main.css" />
      <script defer src="https://code.getmdl.io/1.2.1/material.min.js"></script>
      <script defer src="https://use.fontawesome.com/ade899c041.js"></script>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
      <script src="/public/bundle.js"></script>
    </body>
  </html>
  `

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      // JSON.stringify
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      fs.readFile('./data/heroes.json', 'utf8', (err, jsonStr)=> {
        if (err) console.log(err);

        //const initialState = Object.assign({}, JSON.parse(jsonStr), {heroInFocus:0, sortBy: 'id'});
        const store = configureStore();
        store.dispatch(setHeroes(JSON.parse(jsonStr).heroes)); // JS's 'intuitive' const: can still mutate, but cannot reassign
        store.dispatch(changeHero(0));
        store.dispatch(setSortBy('id'));

        const html = ReactDOMServer.renderToString(
          <Provider store={store}>
            <RouterContext {...props}/>
          </Provider>
        );

        res.send(renderFullPage(html, store.getState())); // change to jsonStr + change renderFullPage accordingly
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

app.listen(port, function () {
  console.log(`The app's listening on port ${port}!`);
});
