const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './dist/index.js',
  mode: 'production',
  resolve: {
    extensions: [ ".js"]
    // extensions: [ '.ts', '.tsx', ".js", ".json"]
  },
  output: {
    filename: 'Stipop.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Stipop',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};