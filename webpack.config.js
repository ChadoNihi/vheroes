'use strict';

const webpack = require('webpack');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

module.exports = [
{
  entry: join(__dirname, "/src/client.js"),
  output: {
      path: join(__dirname, "/public"),
      filename: "bundle.js"
  },
},
{
  entry: join(__dirname, "/src/server.js"),
  output: {
    filename: join(__dirname, "bundle.server.js"),
    //libraryTarget: 'commonjs2',
  },

  target: 'node',
}];
