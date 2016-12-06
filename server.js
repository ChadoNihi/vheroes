import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import { Provider } from 'react-redux';
import { ServerRouter, createServerRenderContext } from 'react-router'
import fs from 'fs';
import path from 'path';

//import routes from './src/routes';
import App from './src/components/App';
import configureStore from './src/store/configureStore';
import {changeHero, setHeroes, setSortBy} from './src/actions/actions';

const app = new Express(),
      port = process.env.PORT || 8080;

const renderFullPage = (html, preloadedState)=>
  `
  <!doctype html>
  <html>
    <head lang='en'>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="A list of persons consciously contributed to reduction of non-human animal suffering. Their impact on bringing about a vegan world is reletively noticeable" />
      <title>Vegan Heroes</title>
      <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.blue_grey-orange.min.css" />
      <link rel="stylesheet" href="/css/main.css" />
      <script defer src="https://code.getmdl.io/1.2.1/material.min.js"></script>
      <script defer src="https://use.fontawesome.com/ade899c041.js"></script>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
      <script src="/js/bundle.js"></script>
    </body>
  </html>
  `

app.use(Express.static('public'));

fs.readFile('./data/heroes.json', 'utf8', (err, jsonStr)=> {
  if (err) console.log(err);

  app.get('/*', function (req, res) {
    const context = createServerRenderContext();
    const store = configureStore();
    store.dispatch(setHeroes(JSON.parse(jsonStr).heroes)); // JS's 'intuitive' const: can still mutate, but cannot reassign
    store.dispatch(changeHero(0));
    store.dispatch(setSortBy('id'));

    let markup = ReactDOMServer.renderToString(
      <Provider store={store}>
        <ServerRouter
          location={req.url}
          context={context}
        >
          <App/>
        </ServerRouter>
      </Provider>
    );

    const result = context.getResult();

    if (result.redirect) {
      res.writeHead(301, {
        Location: result.redirect.pathname
      });
      res.end();
    } else {
      // the result will tell you if there were any misses, if so
      // we can send a 404 and then do a second render pass with
      // the context to clue the <Miss> components into rendering
      // this time (on the client they know from componentDidMount)
      if (result.missed) {
        res.status(404);
        markup = ReactDOMServer.renderToString(
          <Provider store={store}>
            <ServerRouter
              location={req.url}
              context={context}
            >
              <App/>
            </ServerRouter>
          </Provider>
        )
      }

      res.send(renderFullPage(markup, store.getState()));
    }

    /*match({ routes, location: req.url }, (err, redirect, props) => {
      if (err) {
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
    });*/
  });

  app.listen(port, function () {
    console.log(`The app's listening on port ${port}!`);
  });
});
