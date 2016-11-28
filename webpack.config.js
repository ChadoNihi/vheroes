'use strict';

const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "/src/client.js"),
  output: {
      path: path.join(__dirname, "/public"),
      filename: "bundle.js"
  },
};
