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
        },
        {test: /\.css$/, loader: "style-loader!css-loader!postcss-loader"},
        {
           test: /\.(jpe?g|png|gif|svg)$/i,
           loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
           ]
        },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
      ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
    }),
    new ExtractTextPlugin("../css/main.css")
  ]
},


{
  entry: join(__dirname, "server.js"),
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
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['> 5%'] }) ],
  target: 'node'
}];
