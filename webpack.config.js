'use strict';

const webpack = require('webpack');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
{
  entry: join(__dirname, "/src/client.js"),
  output: {
      path: join(__dirname, "/public/js"),
      filename: "bundle.js"
  },
  module: {
      loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
          exclude: /(node_modules)/,
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract(['css-loader', 'stylus-loader']),
        },/*
        {
            exclude: /(node_modules)/,
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: "file-loader"
        }*/
      ]
  },
  plugins: [
    new ExtractTextPlugin("css/main.css"),
  ]
},


{
  entry: join(__dirname, "/src/server.js"),
  output: {
    filename: join(__dirname, "bundle.server.js"),
    //libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['es2015', 'react']
          }
      },
      {test: /\.css$/, loader: "style-loader!css-loader!postcss-loader"}
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  target: 'node'
}];
