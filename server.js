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
import {changeDragLock, changeHero, setHeroes, setSortBy} from './src/actions/actions';
import {reverseSortSuffix} from './src/constants';

const reSort = new RegExp('^(id'+reverseSortSuffix+'|name'+reverseSortSuffix+'|id|name|rand)', 'i');
const parseSortMethod = (sortValFromUrl)=> {
  const res = reSort.exec(sortValFromUrl);
  if (res && res[1]) return res[1];
  else return 'id';
};

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
      <link rel="stylesheet" href="css/material.min.css">
      <script src="js/material.min.js"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
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

  /*let heroes = JSON.parse(jsonStr).heroes;
  heroes.forEach(hero=> {
    hero.shortIntro = hero.shortIntro.replace(/ /g, "\u00a0");
    hero.what = hero.what.replace(/ /g, "\u00a0");
    hero.see = hero.see.map(opt=> opt.replace(/ /g, "\u00a0"));
  });*/

  app.get('/*', function (req, res) {
    const context = createServerRenderContext();
    const store = configureStore();
    store.dispatch(setHeroes(JSON.parse(jsonStr).heroes)); // JS's 'intuitive' const: can still mutate, but cannot reassign
    store.dispatch(changeHero(0));
    store.dispatch(changeDragLock(false));
    store.dispatch(setSortBy((!req.query.s ? 'id' : parseSortMethod(req.query.s))));

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
              <App />
            </ServerRouter>
          </Provider>
        )
      }

      res.send(renderFullPage(markup, store.getState()));
    }
  });

  app.listen(port, function () {
    console.log(`The app's listening on port ${port}!`);
  });
});
