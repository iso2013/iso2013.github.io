const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['env', 'react'], plugins: ["transform-object-rest-spread"] } },
    ],
  },

  plugins: process.argv.indexOf('-p') === -1 ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
